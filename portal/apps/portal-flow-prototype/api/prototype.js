import fs from 'node:fs';
import crypto from 'node:crypto';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const cookieName = 'sdds_prototype_session';
const mime = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.svg': 'image/svg+xml',
  '.webm': 'video/webm',
  '.mp4': 'video/mp4',
};

function timingSafeEqual(left, right) {
  if (left.length !== right.length) return false;

  let result = 0;
  for (let index = 0; index < left.length; index += 1) {
    result |= left.charCodeAt(index) ^ right.charCodeAt(index);
  }
  return result === 0;
}

function getAuthConfig() {
  const expectedUser = (process.env.PROTOTYPE_AUTH_USER || '').trim();
  const expectedPassword = (process.env.PROTOTYPE_AUTH_PASSWORD || '').trim();

  return { expectedUser, expectedPassword };
}

function createSessionToken(user) {
  const { expectedPassword } = getAuthConfig();
  return crypto.createHmac('sha256', expectedPassword).update(`${user}:sdds-prototype`).digest('hex');
}

function parseCookies(header = '') {
  return Object.fromEntries(
    header
      .split(';')
      .map((part) => part.trim().split('='))
      .filter(([name, value]) => name && value)
  );
}

function hasValidCookie(request) {
  const { expectedUser, expectedPassword } = getAuthConfig();

  if (!expectedUser || !expectedPassword) {
    return true;
  }

  const cookies = parseCookies(request.headers.cookie || '');
  const expectedToken = createSessionToken(expectedUser);
  const actualToken = cookies[cookieName] || '';

  return timingSafeEqual(actualToken, expectedToken);
}

function hasBasicAuth(request) {
  const { expectedUser, expectedPassword } = getAuthConfig();
  const authorization = request.headers.authorization || '';
  const [scheme, encoded] = authorization.split(' ');

  if (scheme !== 'Basic' || !encoded) {
    return false;
  }

  const [user, password] = Buffer.from(encoded, 'base64').toString('utf8').split(':');

  return timingSafeEqual((user || '').trim(), expectedUser) && timingSafeEqual((password || '').trim(), expectedPassword);
}

function isAuthorized(request) {
  return hasValidCookie(request) || hasBasicAuth(request);
}

function readBody(request) {
  return new Promise((resolve, reject) => {
    let body = '';

    request.on('data', (chunk) => {
      body += chunk;
    });
    request.on('end', () => resolve(body));
    request.on('error', reject);
  });
}

function renderLogin(response, { error = false } = {}) {
  response.writeHead(error ? 401 : 200, {
    'Content-Type': 'text/html; charset=utf-8',
    'Cache-Control': 'no-store',
  });
  response.end(`<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>SDDS prototype access</title>
    <style>
      :root {
        color-scheme: dark;
        font-family: Inter, Arial, sans-serif;
        background: #07090f;
        color: #f4f7fb;
      }
      body {
        min-height: 100vh;
        margin: 0;
        display: grid;
        place-items: center;
        background:
          radial-gradient(circle at 20% 10%, rgba(68, 114, 255, 0.35), transparent 28rem),
          radial-gradient(circle at 80% 90%, rgba(18, 182, 141, 0.28), transparent 24rem),
          #07090f;
      }
      main {
        width: min(24rem, calc(100vw - 2rem));
        padding: 2rem;
        border: 1px solid rgba(255, 255, 255, 0.14);
        border-radius: 0.75rem;
        background: rgba(10, 14, 24, 0.88);
        box-shadow: 0 24px 80px rgba(0, 0, 0, 0.35);
      }
      h1 {
        margin: 0 0 0.5rem;
        font-size: 1.5rem;
        line-height: 1.2;
      }
      p {
        margin: 0 0 1.5rem;
        color: rgba(244, 247, 251, 0.72);
        line-height: 1.5;
      }
      label {
        display: grid;
        gap: 0.4rem;
        margin: 0 0 1rem;
        color: rgba(244, 247, 251, 0.78);
        font-size: 0.875rem;
      }
      input {
        min-height: 2.75rem;
        border: 1px solid rgba(255, 255, 255, 0.18);
        border-radius: 0.5rem;
        padding: 0 0.85rem;
        background: rgba(255, 255, 255, 0.08);
        color: #fff;
        font: inherit;
      }
      button {
        width: 100%;
        min-height: 2.75rem;
        border: 0;
        border-radius: 0.5rem;
        background: #f4f7fb;
        color: #080b12;
        font: inherit;
        font-weight: 700;
        cursor: pointer;
      }
      .error {
        margin: -0.25rem 0 1rem;
        color: #ffb4a8;
      }
    </style>
  </head>
  <body>
    <main>
      <h1>Team access</h1>
      <p>This SDDS prototype is available to the team only.</p>
      ${error ? '<p class="error">Incorrect login or password.</p>' : ''}
      <form method="post" action="/__prototype-login">
        <label>
          Login
          <input name="user" autocomplete="username" autofocus />
        </label>
        <label>
          Password
          <input name="password" type="password" autocomplete="current-password" />
        </label>
        <button type="submit">Open prototype</button>
      </form>
    </main>
  </body>
</html>`);
}

async function handleLogin(request, response) {
  const { expectedUser, expectedPassword } = getAuthConfig();
  const body = await readBody(request);
  const form = new URLSearchParams(body);
  const user = (form.get('user') || '').trim();
  const password = (form.get('password') || '').trim();

  if (!expectedUser || !expectedPassword || (timingSafeEqual(user, expectedUser) && timingSafeEqual(password, expectedPassword))) {
    response.writeHead(303, {
      'Set-Cookie': `${cookieName}=${createSessionToken(expectedUser || user)}; Path=/; Max-Age=604800; HttpOnly; Secure; SameSite=Lax`,
      Location: '/',
      'Cache-Control': 'no-store',
    });
    response.end();
    return;
  }

  renderLogin(response, { error: true });
}

function resolveFile(request) {
  const url = new URL(request.url, `https://${request.headers.host || 'localhost'}`);
  const rawPath = url.searchParams.get('path') || 'index.html';
  const relative = rawPath === '/' || rawPath === '' ? 'index.html' : rawPath.replace(/^\/+/, '');
  const file = path.resolve(root, relative);

  if (!file.startsWith(root) || !fs.existsSync(file) || fs.statSync(file).isDirectory()) {
    return null;
  }

  return file;
}

export default async function handler(request, response) {
  const url = new URL(request.url, `https://${request.headers.host || 'localhost'}`);
  const routePath = url.searchParams.get('path') || '';

  if (request.method === 'POST' && routePath === '__prototype-login') {
    await handleLogin(request, response);
    return;
  }

  if (!isAuthorized(request)) {
    renderLogin(response);
    return;
  }

  const file = resolveFile(request);

  if (!file) {
    response.writeHead(404).end('Not found');
    return;
  }

  response.writeHead(200, {
    'Content-Type': mime[path.extname(file)] || 'application/octet-stream',
    'Cache-Control': 'no-store, no-cache, must-revalidate',
  });
  fs.createReadStream(file).pipe(response);
}
