// WebGL-hero: спираль (helix) из карточек с компонентами SDDS.
// Каждая карточка — изогнутый сегмент цилиндра (24 полосы), текстура рисуется на 2D-canvas,
// поэтому карточки честно деформируются по форме спирали (референс: pacomepertant.com).

let rafId = 0;
let currentCanvas = null;

const VERTEX_SHADER = `
attribute vec2 aUV;
uniform mat4 uProj;
uniform mat4 uView;
uniform float uAngle0;
uniform float uSpan;
uniform float uY0;
uniform float uH;
uniform float uR;
uniform float uScale;
varying vec2 vUV;
varying float vFace;
void main() {
  // uScale > 1 у карточки под курсором: растёт вокруг своего центра
  // и чуть выдвигается наружу, чтобы не пересекаться с соседями по радиусу.
  float a = uAngle0 + (aUV.x - 0.5) * uSpan * uScale;
  float r = uR + (uScale - 1.0) * 180.0;
  vec3 p = vec3(sin(a) * r, uY0 + (0.5 - aUV.y) * uH * uScale, cos(a) * r);
  vUV = aUV;
  vFace = cos(a);
  gl_Position = uProj * uView * vec4(p, 1.0);
}`;

const FRAGMENT_SHADER = `
precision mediump float;
varying vec2 vUV;
varying float vFace;
uniform sampler2D uTex;
uniform vec4 uRect;
uniform vec4 uBackRect;
uniform float uFade;
uniform float uGlow;
void main() {
  // Тыльная сторона карточки показывает заглушку с логотипом SDDS;
  // U зеркалируется, чтобы логотип не читался в отражении.
  vec2 tuv = vUV;
  vec4 rect = uRect;
  if (!gl_FrontFacing) { rect = uBackRect; tuv.x = 1.0 - tuv.x; }
  vec4 c = texture2D(uTex, mix(rect.xy, rect.zw, tuv));
  if (c.a < 0.5) discard;
  float f = clamp(vFace * 0.5 + 0.5, 0.0, 1.0);
  float dim = 0.26 + 0.74 * f;
  vec3 rgb = c.rgb * dim + smoothstep(0.985, 1.0, f) * vec3(0.04, 0.08, 0.18);
  // Свечение карточки под курсором: лёгкое осветление + холодный отсвет.
  rgb = rgb * (1.0 + 0.22 * uGlow) + uGlow * vec3(0.015, 0.035, 0.08);
  // На концах спирали карточка растворяется в фон страницы — цикл выглядит бесконечным.
  vec3 bg = vec3(0.118, 0.133, 0.157); // --shell-bg #1E2228
  gl_FragColor = vec4(mix(bg, rgb, uFade), 1.0);
}`;

// ---------- Текстуры карточек (атлас 4×3, тайл 512×384) ----------

const CARD_TYPES = ['button', 'textfield', 'switch', 'chip', 'checkbox', 'badge', 'segment', 'slider', 'select', 'avatar', 'progress', 'toast'];
// Логический тайл 512×320 — те же 16:10, что и геометрия карточки (текстура не искажается).
// Рисуется с суперсэмплингом texScale в атлас со сторонами-степенями двойки:
// в WebGL1 только power-of-two текстуры получают мипмапы и анизотропную фильтрацию.
// 4-й ряд атласа: 13-й тайл — заглушка тыльной стороны карточки (логотип SDDS).
const TILE_W = 512, TILE_H = 320, ATLAS_COLS = 4, ATLAS_ROWS = 4;
const BACK_TILE = CARD_TYPES.length; // index 12
let atlasW = 0, atlasH = 0, texScale = 1;

function roundRect(ctx, x, y, w, h, r) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + w, y, x + w, y + h, r);
  ctx.arcTo(x + w, y + h, x, y + h, r);
  ctx.arcTo(x, y + h, x, y, r);
  ctx.arcTo(x, y, x + w, y, r);
  ctx.closePath();
}

function drawPlate(ctx, x, y, w, h) {
  const grad = ctx.createLinearGradient(x, y, x + w * 0.4, y + h);
  grad.addColorStop(0, '#2a323e');
  grad.addColorStop(1, '#1a2028');
  roundRect(ctx, x, y, w, h, 30);
  ctx.fillStyle = grad;
  ctx.fill();
  ctx.save();
  ctx.clip();
  ctx.strokeStyle = 'rgba(255,255,255,0.045)';
  ctx.lineWidth = 1.5;
  for (let gx = x + 26; gx < x + w; gx += 30) { ctx.beginPath(); ctx.moveTo(gx, y); ctx.lineTo(gx, y + h); ctx.stroke(); }
  for (let gy = y + 26; gy < y + h; gy += 30) { ctx.beginPath(); ctx.moveTo(x, gy); ctx.lineTo(x + w, gy); ctx.stroke(); }
  ctx.restore();
  roundRect(ctx, x + 1.5, y + 1.5, w - 3, h - 3, 28);
  ctx.strokeStyle = 'rgba(255,255,255,0.14)';
  ctx.lineWidth = 3;
  ctx.stroke();
}

const painters = {
  button(ctx, cx, cy) {
    const w = 190, h = 66;
    const grad = ctx.createLinearGradient(cx, cy - h / 2, cx, cy + h / 2);
    grad.addColorStop(0, '#3b82ff'); grad.addColorStop(1, '#2563eb');
    roundRect(ctx, cx - w / 2, cy - h / 2, w, h, 16);
    ctx.fillStyle = grad; ctx.fill();
    ctx.fillStyle = '#fff'; ctx.font = '600 26px Inter, Arial, sans-serif';
    ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    ctx.fillText('Button', cx, cy + 1);
  },
  textfield(ctx, cx, cy) {
    ctx.fillStyle = '#8b95a3'; ctx.font = '500 19px Inter, Arial, sans-serif';
    ctx.textAlign = 'left'; ctx.textBaseline = 'middle';
    ctx.fillText('Email', cx - 120, cy - 48);
    roundRect(ctx, cx - 120, cy - 28, 240, 62, 14);
    ctx.fillStyle = '#20252c'; ctx.fill();
    ctx.strokeStyle = '#3c444f'; ctx.lineWidth = 2.5; ctx.stroke();
    ctx.fillStyle = '#e8edf4'; ctx.font = '400 21px Inter, Arial, sans-serif';
    ctx.fillText('name@sber.ru', cx - 102, cy + 4);
  },
  switch(ctx, cx, cy) {
    roundRect(ctx, cx - 52, cy - 30, 104, 60, 30);
    ctx.fillStyle = '#24b23e'; ctx.fill();
    ctx.beginPath(); ctx.arc(cx + 24, cy, 23, 0, Math.PI * 2);
    ctx.fillStyle = '#fff'; ctx.fill();
  },
  chip(ctx, cx, cy) {
    roundRect(ctx, cx - 82, cy - 28, 164, 56, 14);
    ctx.fillStyle = 'rgba(16,127,140,0.3)'; ctx.fill();
    ctx.fillStyle = '#3fc6d4'; ctx.font = '600 22px Inter, Arial, sans-serif';
    ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    ctx.fillText('Фильтр ✕', cx, cy + 1);
  },
  checkbox(ctx, cx, cy) {
    roundRect(ctx, cx - 100, cy - 19, 38, 38, 10);
    ctx.fillStyle = '#3b78ff'; ctx.fill();
    ctx.strokeStyle = '#fff'; ctx.lineWidth = 4; ctx.lineCap = 'round';
    ctx.beginPath(); ctx.moveTo(cx - 91, cy); ctx.lineTo(cx - 84, cy + 8); ctx.lineTo(cx - 71, cy - 8); ctx.stroke();
    ctx.fillStyle = '#dfe6ef'; ctx.font = '500 22px Inter, Arial, sans-serif';
    ctx.textAlign = 'left'; ctx.textBaseline = 'middle';
    ctx.fillText('Согласен', cx - 48, cy + 1);
  },
  badge(ctx, cx, cy) {
    const grad = ctx.createLinearGradient(cx - 34, cy - 34, cx + 34, cy + 34);
    grad.addColorStop(0, '#6d5dfc'); grad.addColorStop(1, '#4b3fd4');
    ctx.beginPath(); ctx.arc(cx, cy + 4, 38, 0, Math.PI * 2); ctx.fillStyle = grad; ctx.fill();
    ctx.fillStyle = '#fff'; ctx.font = '700 22px Inter, Arial, sans-serif';
    ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    ctx.fillText('АД', cx, cy + 6);
    ctx.beginPath(); ctx.arc(cx + 30, cy - 26, 15, 0, Math.PI * 2);
    ctx.fillStyle = '#ef4444'; ctx.fill();
    ctx.strokeStyle = '#1a2028'; ctx.lineWidth = 4; ctx.stroke();
    ctx.fillStyle = '#fff'; ctx.font = '700 15px Inter, Arial, sans-serif';
    ctx.fillText('3', cx + 30, cy - 25);
  },
  segment(ctx, cx, cy) {
    roundRect(ctx, cx - 110, cy - 30, 220, 60, 14);
    ctx.fillStyle = '#20252c'; ctx.fill();
    roundRect(ctx, cx - 104, cy - 24, 104, 48, 11);
    ctx.fillStyle = '#3b424d'; ctx.fill();
    ctx.font = '500 20px Inter, Arial, sans-serif';
    ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    ctx.fillStyle = '#fff'; ctx.fillText('День', cx - 52, cy + 1);
    ctx.fillStyle = '#8b95a3'; ctx.fillText('Месяц', cx + 54, cy + 1);
  },
  slider(ctx, cx, cy) {
    roundRect(ctx, cx - 110, cy - 4, 220, 8, 4);
    ctx.fillStyle = '#343d48'; ctx.fill();
    roundRect(ctx, cx - 110, cy - 4, 132, 8, 4);
    ctx.fillStyle = '#3b78ff'; ctx.fill();
    ctx.beginPath(); ctx.arc(cx + 22, cy, 14, 0, Math.PI * 2);
    ctx.fillStyle = '#fff'; ctx.fill();
    ctx.strokeStyle = 'rgba(0,0,0,0.35)'; ctx.lineWidth = 2; ctx.stroke();
  },
  select(ctx, cx, cy) {
    roundRect(ctx, cx - 110, cy - 31, 220, 62, 14);
    ctx.fillStyle = '#20252c'; ctx.fill();
    ctx.strokeStyle = '#3c444f'; ctx.lineWidth = 2.5; ctx.stroke();
    ctx.fillStyle = '#e8edf4'; ctx.font = '400 21px Inter, Arial, sans-serif';
    ctx.textAlign = 'left'; ctx.textBaseline = 'middle';
    ctx.fillText('Тема', cx - 90, cy + 1);
    ctx.strokeStyle = '#8b95a3'; ctx.lineWidth = 3; ctx.lineCap = 'round'; ctx.lineJoin = 'round';
    ctx.beginPath(); ctx.moveTo(cx + 74, cy - 5); ctx.lineTo(cx + 84, cy + 6); ctx.lineTo(cx + 94, cy - 5); ctx.stroke();
  },
  avatar(ctx, cx, cy) {
    const grad = ctx.createLinearGradient(cx - 44, cy - 44, cx + 44, cy + 44);
    grad.addColorStop(0, '#24b23e'); grad.addColorStop(1, '#107f8c');
    ctx.beginPath(); ctx.arc(cx, cy, 46, 0, Math.PI * 2); ctx.fillStyle = grad; ctx.fill();
    ctx.fillStyle = '#fff'; ctx.font = '700 27px Inter, Arial, sans-serif';
    ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    ctx.fillText('GC', cx, cy + 2);
  },
  progress(ctx, cx, cy) {
    roundRect(ctx, cx - 110, cy - 7, 220, 14, 7);
    ctx.fillStyle = '#343d48'; ctx.fill();
    const grad = ctx.createLinearGradient(cx - 110, cy, cx + 60, cy);
    grad.addColorStop(0, '#24b23e'); grad.addColorStop(1, '#4be07a');
    roundRect(ctx, cx - 110, cy - 7, 160, 14, 7);
    ctx.fillStyle = grad; ctx.fill();
  },
  toast(ctx, cx, cy) {
    roundRect(ctx, cx - 110, cy - 30, 220, 60, 15);
    ctx.fillStyle = '#12351d'; ctx.fill();
    ctx.strokeStyle = 'rgba(36,178,62,0.4)'; ctx.lineWidth = 2.5; ctx.stroke();
    ctx.beginPath(); ctx.arc(cx - 78, cy, 12, 0, Math.PI * 2);
    ctx.fillStyle = '#24b23e'; ctx.fill();
    ctx.strokeStyle = '#fff'; ctx.lineWidth = 3; ctx.lineCap = 'round';
    ctx.beginPath(); ctx.moveTo(cx - 83, cy); ctx.lineTo(cx - 79, cy + 4); ctx.lineTo(cx - 72, cy - 5); ctx.stroke();
    ctx.fillStyle = '#a9e8c9'; ctx.font = '500 21px Inter, Arial, sans-serif';
    ctx.textAlign = 'left'; ctx.textBaseline = 'middle';
    ctx.fillText('Сохранено', cx - 56, cy + 1);
  },
};

function buildAtlas(maxTexSize) {
  texScale = maxTexSize >= 4096 ? 2 : 1;
  const pot = (v) => Math.pow(2, Math.ceil(Math.log2(v)));
  atlasW = pot(TILE_W * texScale * ATLAS_COLS);   // 4096 при ×2 (или 2048)
  atlasH = pot(TILE_H * texScale * ATLAS_ROWS);   // 2048 при ×2 (или 1024)
  const atlas = document.createElement('canvas');
  atlas.width = atlasW;
  atlas.height = atlasH;
  const ctx = atlas.getContext('2d');
  ctx.scale(texScale, texScale); // painters рисуют в логических координатах 512×320
  CARD_TYPES.forEach((type, index) => {
    const x = (index % ATLAS_COLS) * TILE_W;
    const y = Math.floor(index / ATLAS_COLS) * TILE_H;
    const pad = 10;
    drawPlate(ctx, x + pad, y + pad, TILE_W - pad * 2, TILE_H - pad * 2);
    painters[type]?.(ctx, x + TILE_W / 2, y + TILE_H / 2);
  });
  drawBackTile(ctx, (BACK_TILE % ATLAS_COLS) * TILE_W, Math.floor(BACK_TILE / ATLAS_COLS) * TILE_H);
  return atlas;
}

// Тыльная сторона карточки: ровная тёмная плашка с приглушённым логотипом SDDS.
function drawBackTile(ctx, x, y) {
  const pad = 10;
  roundRect(ctx, x + pad, y + pad, TILE_W - pad * 2, TILE_H - pad * 2, 30);
  ctx.fillStyle = '#2C323A';
  ctx.fill();
  ctx.strokeStyle = 'rgba(255,255,255,0.07)';
  ctx.lineWidth = 3;
  ctx.stroke();
  const cy = y + TILE_H / 2;
  const dim = '#353c48';
  // Иконка: два пересекающихся «проводника» с квадратными узлами на концах.
  const ix = x + TILE_W / 2 - 76;
  ctx.strokeStyle = dim;
  ctx.lineWidth = 7;
  ctx.lineCap = 'round';
  ctx.beginPath(); ctx.moveTo(ix - 24, cy - 17); ctx.lineTo(ix + 24, cy + 17); ctx.stroke();
  ctx.beginPath(); ctx.moveTo(ix - 24, cy + 17); ctx.lineTo(ix + 24, cy - 17); ctx.stroke();
  ctx.fillStyle = dim;
  [[-24, -17], [24, -17], [-24, 17], [24, 17]].forEach(([dx, dy]) => {
    roundRect(ctx, ix + dx - 7, cy + dy - 7, 14, 14, 4);
    ctx.fill();
  });
  ctx.font = '700 46px Inter, Arial, sans-serif';
  ctx.textAlign = 'left';
  ctx.textBaseline = 'middle';
  ctx.fillText('SDDS', ix + 46, cy + 2);
}

function uvRect(index) {
  // Атлас дополнен до степени двойки, поэтому UV считаем от фактических размеров тайла.
  const col = index % ATLAS_COLS, row = Math.floor(index / ATLAS_COLS);
  const w = (TILE_W * texScale) / atlasW, h = (TILE_H * texScale) / atlasH;
  return [col * w, row * h, (col + 1) * w, (row + 1) * h];
}

// ---------- Матрицы ----------

function perspective(out, fovy, aspect, near, far) {
  const f = 1 / Math.tan(fovy / 2);
  out.fill(0);
  out[0] = f / aspect; out[5] = f;
  out[10] = (far + near) / (near - far); out[11] = -1;
  out[14] = (2 * far * near) / (near - far);
  return out;
}

function viewMatrix(out, dist, tiltX, panY) {
  const c = Math.cos(tiltX), s = Math.sin(tiltX);
  out[0] = 1; out[1] = 0;  out[2] = 0;  out[3] = 0;
  out[4] = 0; out[5] = c;  out[6] = s;  out[7] = 0;
  out[8] = 0; out[9] = -s; out[10] = c; out[11] = 0;
  out[12] = 0; out[13] = panY; out[14] = -dist; out[15] = 1;
  return out;
}

function compileProgram(gl) {
  const make = (type, source) => {
    const shader = gl.createShader(type);
    gl.shaderSource(shader, source);
    gl.compileShader(shader);
    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) throw new Error(gl.getShaderInfoLog(shader) || 'shader error');
    return shader;
  };
  const program = gl.createProgram();
  gl.attachShader(program, make(gl.VERTEX_SHADER, VERTEX_SHADER));
  gl.attachShader(program, make(gl.FRAGMENT_SHADER, FRAGMENT_SHADER));
  gl.linkProgram(program);
  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) throw new Error(gl.getProgramInfoLog(program) || 'link error');
  return program;
}

// ---------- Сцена ----------

export function mountHero(canvas) {
  if (!canvas) { unmountHero(); return; }
  if (canvas === currentCanvas) return;
  unmountHero();
  let gl;
  try { gl = canvas.getContext('webgl', { alpha: true, antialias: true }); } catch { gl = null; }
  if (!gl) { canvas.classList.add('is-fallback'); return; }
  currentCanvas = canvas;

  let program;
  try { program = compileProgram(gl); } catch { canvas.classList.add('is-fallback'); currentCanvas = null; return; }
  gl.useProgram(program);

  // Патч-меш: 24 полосы по дуге — этим и достигается изгиб карточки.
  const COLS = 24;
  const uv = [];
  for (let i = 0; i <= COLS; i += 1) { uv.push(i / COLS, 0, i / COLS, 1); }
  const indices = [];
  for (let i = 0; i < COLS; i += 1) {
    const a = i * 2, b = a + 1, c = a + 2, d = a + 3;
    indices.push(a, b, c, b, d, c);
  }
  const uvBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, uvBuffer);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(uv), gl.STATIC_DRAW);
  const aUV = gl.getAttribLocation(program, 'aUV');
  gl.enableVertexAttribArray(aUV);
  gl.vertexAttribPointer(aUV, 2, gl.FLOAT, false, 0, 0);
  const indexBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer);
  gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(indices), gl.STATIC_DRAW);

  // Атлас компонентов.
  const texture = gl.createTexture();
  gl.bindTexture(gl.TEXTURE_2D, texture);
  gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, buildAtlas(gl.getParameter(gl.MAX_TEXTURE_SIZE)));
  gl.generateMipmap(gl.TEXTURE_2D); // атлас — степень двойки, мипмапы доступны и в WebGL1
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR_MIPMAP_LINEAR);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
  // Анизотропная фильтрация — чёткость карточек, повёрнутых к камере под углом.
  const aniso = gl.getExtension('EXT_texture_filter_anisotropic')
    || gl.getExtension('WEBKIT_EXT_texture_filter_anisotropic')
    || gl.getExtension('MOZ_EXT_texture_filter_anisotropic');
  if (aniso) {
    const max = gl.getParameter(aniso.MAX_TEXTURE_MAX_ANISOTROPY_EXT) || 1;
    gl.texParameterf(gl.TEXTURE_2D, aniso.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(8, max));
  }

  const u = {
    proj: gl.getUniformLocation(program, 'uProj'),
    view: gl.getUniformLocation(program, 'uView'),
    angle0: gl.getUniformLocation(program, 'uAngle0'),
    span: gl.getUniformLocation(program, 'uSpan'),
    y0: gl.getUniformLocation(program, 'uY0'),
    h: gl.getUniformLocation(program, 'uH'),
    r: gl.getUniformLocation(program, 'uR'),
    rect: gl.getUniformLocation(program, 'uRect'),
    backRect: gl.getUniformLocation(program, 'uBackRect'),
    fade: gl.getUniformLocation(program, 'uFade'),
    scale: gl.getUniformLocation(program, 'uScale'),
    glow: gl.getUniformLocation(program, 'uGlow'),
  };
  gl.uniform4fv(u.backRect, uvRect(BACK_TILE)); // тайл-заглушка одинаков для всех карточек

  gl.enable(gl.DEPTH_TEST);
  gl.clearColor(0, 0, 0, 0);

  // Параметры спирали. TURNS — целое, чтобы концы ленты совпадали по азимуту
  // и цикл замыкался бесшовно (карточка растворяется внизу и проявляется вверху).
  const INSTANCES = 32;
  const TURNS = 4;                      // 8 карточек на виток (32/4); целое — для бесшовного цикла
  const SPAN = 0.72;                    // угловая ширина карточки (изгиб)
  const RADIUS = 680;
  const CARD_H = 306;                   // ширина SPAN×RADIUS ≈ 490 → пропорции 16:10
  const TOP_Y = 960;                    // верх ленты — выше кадра
  const DROP = 2208;                    // низ ленты — ниже кадра: появление и исчезание карточек скрыто (шаг витка сохранён при TURNS 5→4)
  const smooth = (x, a, b) => { const k = Math.max(0, Math.min(1, (x - a) / (b - a))); return k * k * (3 - 2 * k); };

  const proj = new Float32Array(16);
  const view = new Float32Array(16);

  const reducedMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
  const startTime = performance.now();

  // Камера — общие константы для рендера и определения карточки под курсором.
  const CAM_FOV = Math.PI / 4.1, CAM_DIST = 1750, CAM_TILT = 0.14, CAM_PANY = 75;

  // Позиция курсора в CSS-пикселях канваса; hover[i] — плавный 0..1 для каждой карточки.
  let cursorX = -1, cursorY = -1;
  const hover = new Float32Array(INSTANCES);
  const anglePos = new Float32Array(INSTANCES), yPos = new Float32Array(INSTANCES), phase = new Float32Array(INSTANCES);

  const onPointer = (event) => {
    const rect = canvas.getBoundingClientRect();
    cursorX = event.clientX - rect.left;
    cursorY = event.clientY - rect.top;
  };
  const onPointerLeave = () => { cursorX = -1; cursorY = -1; };
  window.addEventListener('pointermove', onPointer, { passive: true });
  document.documentElement.addEventListener('pointerleave', onPointerLeave);

  let inView = true;
  const resume = () => {
    if (inView && !document.hidden && !rafId && canvas === currentCanvas) rafId = requestAnimationFrame(frame);
  };
  const viewObserver = typeof IntersectionObserver !== 'undefined'
    ? new IntersectionObserver((entries) => { inView = entries[0]?.isIntersecting ?? true; resume(); }, { threshold: 0.05 })
    : null;
  viewObserver?.observe(canvas);
  const onVisibility = () => resume();
  document.addEventListener('visibilitychange', onVisibility);
  const isPaused = () => !inView || document.hidden;

  canvas.__heroCleanup = () => {
    window.removeEventListener('pointermove', onPointer);
    document.documentElement.removeEventListener('pointerleave', onPointerLeave);
    viewObserver?.disconnect();
    document.removeEventListener('visibilitychange', onVisibility);
  };

  const draw = (t) => {
    // Фон декоративный: на Retina (dpr 2) режем плотность фреймбуфера до 1.5 — это −44% заливки
    // (главная нагрузка на Intel-графику), без заметной потери резкости и без влияния на моторику.
    const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
    const width = Math.round(canvas.clientWidth * dpr);
    const height = Math.round(canvas.clientHeight * dpr);
    if (canvas.width !== width || canvas.height !== height) { canvas.width = width; canvas.height = height; }
    if (!width || !height) return;
    gl.viewport(0, 0, width, height);
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

    // flow двигает карточки вдоль спирали (даёт и вращение, и «течение» вниз);
    // Скорость постоянна: ни курсор, ни прокрутка на спираль не влияют.
    const flow = reducedMotion ? 0.31 : t * 0.006;
    const angleOffset = 0;
    const centerY = TOP_Y - DROP / 3;

    const W = canvas.clientWidth, H = canvas.clientHeight;
    const aspect = W / H;
    // На узких экранах отдаляем камеру: карточки мельче и не перекрывают заголовок.
    const camDist = CAM_DIST * (aspect < 0.62 ? 1.9 : aspect < 0.95 ? 1.45 : 1);
    gl.uniformMatrix4fv(u.proj, false, perspective(proj, CAM_FOV, aspect, 1, 6000));
    gl.uniformMatrix4fv(u.view, false, viewMatrix(view, camDist, CAM_TILT, CAM_PANY));
    gl.uniform1f(u.span, SPAN);
    gl.uniform1f(u.h, CARD_H);
    gl.uniform1f(u.r, RADIUS);

    // Проекция мировой точки в экранные CSS-пиксели (та же математика, что в шейдере).
    const fl = 1 / Math.tan(CAM_FOV / 2);
    const cT = Math.cos(CAM_TILT), sT = Math.sin(CAM_TILT);
    const toScreen = (x, y, z) => {
      const vy = cT * y - sT * z + CAM_PANY;
      const w = camDist - (sT * y + cT * z);            // = -viewZ, глубина до камеры
      if (w <= 1) return null;
      return [(x * (fl / aspect) / w * 0.5 + 0.5) * W, (0.5 - (vy * fl / w) * 0.5) * H, w];
    };

    // Карточка под курсором: сравниваем курсор с экранным прямоугольником каждой карточки,
    // из совпавших берём ближайшую к камере (она перекрывает остальные).
    let hovered = -1, bestDepth = Infinity;
    for (let i = 0; i < INSTANCES; i += 1) {
      const p = ((i / INSTANCES + flow) % 1 + 1) % 1;   // позиция вдоль ленты, 0 — верх, 1 — низ
      phase[i] = p;
      anglePos[i] = angleOffset + p * TURNS * Math.PI * 2;
      yPos[i] = centerY + (0.5 - p) * DROP;
      if (reducedMotion || cursorX < 0) continue;
      const a = anglePos[i], y0 = yPos[i];
      const cx = Math.sin(a) * RADIUS, cz = Math.cos(a) * RADIUS;
      const center = toScreen(cx, y0, cz);
      if (!center) continue;
      const edge = toScreen(Math.sin(a + SPAN / 2) * RADIUS, y0, Math.cos(a + SPAN / 2) * RADIUS);
      const top = toScreen(cx, y0 + CARD_H / 2, cz);
      if (!edge || !top) continue;
      const halfW = Math.abs(edge[0] - center[0]), halfH = Math.abs(top[1] - center[1]);
      if (Math.abs(cursorX - center[0]) <= halfW && Math.abs(cursorY - center[1]) <= halfH && center[2] < bestDepth) {
        bestDepth = center[2];
        hovered = i;
      }
    }

    for (let i = 0; i < INSTANCES; i += 1) {
      // Наведение нарастает быстрее, чем спадает — карточка «вспыхивает» и мягко гаснет.
      const target = i === hovered ? 1 : 0;
      hover[i] += (target - hover[i]) * (target ? 0.16 : 0.07);
      gl.uniform1f(u.angle0, anglePos[i]);
      gl.uniform1f(u.y0, yPos[i]);
      gl.uniform1f(u.fade, smooth(phase[i], 0, 0.09) * (1 - smooth(phase[i], 0.91, 1)));
      gl.uniform1f(u.scale, 1 + 0.07 * hover[i]);
      gl.uniform1f(u.glow, hover[i]);
      gl.uniform4fv(u.rect, uvRect(i % CARD_TYPES.length));
      gl.drawElements(gl.TRIANGLES, indices.length, gl.UNSIGNED_SHORT, 0);
    }
  };

  // Частота — нативная (каждый кадр дисплея): любое пропускание кадров даёт неровный шаг
  // и микроджиттер на высокогерцовых экранах. Экономию берём разрешением и паузой вне экрана.
  const frame = (now) => {
    if (canvas !== currentCanvas) return;
    if (isPaused()) { rafId = 0; return; }
    draw((now - startTime) / 1000);
    if (reducedMotion) { rafId = 0; return; } // статичный кадр
    rafId = requestAnimationFrame(frame);
  };
  rafId = requestAnimationFrame(frame);
}

export function unmountHero() {
  if (rafId) cancelAnimationFrame(rafId);
  rafId = 0;
  currentCanvas?.__heroCleanup?.();
  currentCanvas = null;
}
