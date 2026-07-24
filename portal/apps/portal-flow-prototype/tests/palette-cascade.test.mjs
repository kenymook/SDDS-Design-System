import assert from 'node:assert/strict';

globalThis.__SDDS_ENABLE_TEST_HOOKS__ = true;

function storage(seed = {}) {
  const values = new Map(Object.entries(seed));
  return {
    getItem(key) { return values.has(key) ? values.get(key) : null; },
    setItem(key, value) { values.set(key, String(value)); },
    removeItem(key) { values.delete(key); },
    clear() { values.clear(); },
  };
}

const appElement = {
  innerHTML: '',
  addEventListener() {},
  querySelector() { return null; },
  querySelectorAll() { return []; },
  contains() { return false; },
};

globalThis.localStorage = storage({
  'sdds-portal-flow-v6': JSON.stringify({ route: 'auth', authenticated: false }),
});
globalThis.sessionStorage = storage();
globalThis.document = {
  activeElement: null,
  body: {},
  documentElement: { scrollHeight: 0 },
  querySelector(selector) { return selector === '#app' ? appElement : null; },
  getElementById() { return null; },
  createElement() {
    return {
      style: {},
      click() {},
      remove() {},
      appendChild() {},
      setAttribute() {},
      getContext() { return null; },
    };
  },
};
globalThis.window = globalThis;
window.innerHeight = 900;
window.innerWidth = 1440;
window.scrollY = 0;
window.matchMedia = () => ({ matches: true });
window.addEventListener = () => {};
window.removeEventListener = () => {};
window.scrollTo = () => {};
globalThis.requestAnimationFrame = () => 0;
globalThis.cancelAnimationFrame = () => {};
globalThis.getComputedStyle = () => ({ overflowY: 'visible' });
globalThis.fetch = async () => { throw new Error('Network is disabled in the palette cascade test.'); };

await import('../app.js');

const hooks = globalThis.__SDDS_TEST_HOOKS__;
assert.ok(hooks, 'Test hooks must be available');

const state = hooks.state();
const token = {
  id: 'accent-token',
  group: 'colors',
  name: 'color.Surfaces.Default.Accent.Solid.Accent',
  displayName: 'surfaceAccentSolidAccent',
  sourcePath: 'Surfaces.Default.Accent.Solid.Accent',
  value: '#0C9423',
  darkValue: '#0DA326',
  paletteLinks: {
    light: { row: 'Hue130', step: '600', match: 'file' },
    dark: { row: 'Hue130', step: '500', match: 'file' },
  },
};

Object.assign(state, {
  tokens: [token],
  components: [
    { id: 'button', name: 'Button', property: 'height', value: '40', policy: 'editable' },
    { id: 'icon-button', name: 'IconButton', property: 'size', value: '36', policy: 'editable' },
  ],
  changes: [],
  sourcePaletteOverrides: {
    Hue130: { 500: '#118833', 600: '#0A7728' },
  },
  sourcePaletteRowSources: {},
  contextUnlinked: {},
  contextOverrides: {},
  colorValueLabels: {},
  componentStyleOverrides: {
    button: {
      roles: {
        background: 'accent-token',
        icon: 'context:accent-token:ondark',
      },
      sizes: {},
    },
  },
});

assert.equal(hooks.tokenDraftValue('accent-token', 'light'), '#0A7728', 'Light token follows its palette step');
assert.equal(hooks.tokenDraftValue('accent-token', 'dark'), '#118833', 'Dark token follows its palette step');
assert.equal(hooks.contextFieldValue('accent-token', 'onlight', 'dark'), '#0A7728', 'OnLight inherits Light');
assert.equal(hooks.contextFieldValue('accent-token', 'ondark', 'light'), '#118833', 'OnDark inherits Dark');
assert.equal(hooks.contextFieldValue('accent-token', 'inverse', 'light'), '#118833', 'Inverse Light inherits Dark');
assert.equal(hooks.contextFieldValue('accent-token', 'inverse', 'dark'), '#0A7728', 'Inverse Dark inherits Light');
assert.equal(hooks.componentRoleTokenValue('button', 'background', '', 'light'), '#0A7728', 'Component background resolves the linked semantic token');
assert.equal(hooks.componentRoleTokenValue('button', 'icon', '', 'light'), '#118833', 'Component context binding resolves the linked context');

state.componentPreviewTheme = 'dark';
const darkComponentMarkup = hooks.componentPreviewMarkup(state.components[0], '40', 'properties');
assert.match(darkComponentMarkup, /data-preview-theme="dark"/, 'Component preview exposes its active theme mode');
assert.match(darkComponentMarkup, /--component-accent:#118833/, 'Dark component preview resolves Dark semantic token values');
const componentsMarkup = hooks.componentsEditor();
assert.match(componentsMarkup, /data-action="component-preview-theme" data-mode="light"/, 'Component toolbar exposes Light preview');
assert.match(componentsMarkup, /data-action="component-preview-theme" data-mode="dark" class="is-active"/, 'Component toolbar exposes and selects Dark preview');
assert.match(componentsMarkup, /data-action="component-inspector-tab" data-tab="style"/, 'Component inspector exposes the Style tab');
assert.match(componentsMarkup, /data-action="component-inspector-tab" data-tab="props"/, 'Component inspector exposes the Props tab');
assert.doesNotMatch(componentsMarkup, /data-action="component-tab"/, 'Legacy Properties and States workspace tabs are removed');
assert.match(componentsMarkup, /class="component-list-icon"/, 'Component list uses component glyphs');
assert.doesNotMatch(componentsMarkup, /<i class="token-status/, 'Component list no longer uses color swatches');
assert.doesNotMatch(componentsMarkup, /Affected entities|Linked tokens/, 'Component inspector omits duplicated impact and token lists');
const buttonPropsMarkup = hooks.componentPropsInspector(state.components[0]);
assert.match(buttonPropsMarkup, /data-prop="icon"/, 'Button props expose the optional icon');
assert.match(buttonPropsMarkup, /data-prop="fullWidth"/, 'Button props expose full width');
const iconButton = state.components.find((component) => component.id === 'icon-button');
const iconButtonPropsMarkup = hooks.componentPropsInspector(iconButton);
assert.match(iconButtonPropsMarkup, /IconButton props/, 'IconButton exposes a dedicated props panel');
assert.match(iconButtonPropsMarkup, /data-prop="ariaLabel"/, 'IconButton exposes its accessible name');
assert.match(iconButtonPropsMarkup, /data-prop="icon"/, 'IconButton exposes icon selection');
assert.match(iconButtonPropsMarkup, /data-prop="loading"/, 'IconButton exposes loading state');
state.componentStyleOverrides['icon-button'] = {
  roles: {},
  sizes: {},
  props: { ariaLabel: 'Закрыть', size: 'l', icon: 'close', disabled: false, loading: false },
};
const iconButtonPreview = hooks.componentPreviewMarkup(iconButton, '36', 'interactive');
assert.match(iconButtonPreview, /aria-label="Закрыть"/, 'IconButton preview follows its accessible name');
assert.match(iconButtonPreview, /demo-icon-button-glyph/, 'IconButton preview renders the selected icon');
assert.match(iconButtonPreview, /width:40px;height:40px/, 'IconButton preview follows the selected size preset');
assert.doesNotMatch(darkComponentMarkup, /demo-button-icon/, 'Button preview omits an icon when the prop is off');
assert.ok(
  !hooks.componentAccessibilityPairs('button', { activePropsOnly: true }).some((pair) => pair.foregroundRole === 'icon'),
  'Live component validation follows the currently visible icon prop',
);
assert.ok(
  hooks.componentAccessibilityPairs('button').some((pair) => pair.foregroundRole === 'icon'),
  'Cross-theme validation keeps optional icon configurations in the health report',
);
state.componentStyleOverrides.button.props = { ...hooks.componentProps('button'), icon: true, iconPosition: 'end' };
const buttonWithIconMarkup = hooks.componentPreviewMarkup(state.components[0], '40', 'interactive');
assert.match(buttonWithIconMarkup, /demo-button-icon/, 'Button preview renders the icon when the prop is on');
assert.match(buttonWithIconMarkup, /<span>Primary action<\/span><span class="demo-button-icon"/, 'Button preview follows icon position');
const darkInspectorMarkup = hooks.componentStyleInspector(state.components[0]);
assert.match(darkInspectorMarkup, /Component styling <small>· Dark<\/small>/, 'Component inspector names the active validation mode');
assert.match(darkInspectorMarkup, /Contrast · Dark/, 'Component inspector exposes live contrast status for the active mode');
assert.match(darkInspectorMarkup, /has-contrast-issue/, 'Component inspector marks roles that form a failing contrast pair');
assert.match(darkInspectorMarkup, /background:#118833/, 'Component inspector swatches resolve values from the active Dark mode');
assert.doesNotMatch(darkInspectorMarkup, /component-contrast-state is-pass/, 'Passed badges are omitted from individual component states');
assert.ok(
  hooks.componentAccessibilityPairs('button').some((pair) => pair.backgroundRole && pair.foregroundRole),
  'Component accessibility pairs identify both roles so the inspector can highlight them',
);
assert.ok(
  hooks.componentAccessibilityPairs('button').some((pair) => pair.stateLabel === 'Focus' && pair.backgroundRole === 'canvas'),
  'An external focus outline is checked against the surrounding canvas, not the button fill',
);

state.changes = [{
  key: 'token:accent-token:light',
  kind: 'token',
  id: 'accent-token',
  mode: 'light',
  from: token.value,
  to: '#E84D0080',
}];
state.colorValueLabels = {
  'accent-token::light': { rgbHex: 'E84D00', label: 'Hue20 600' },
};
state.sourcePaletteOverrides.Hue20 = { 600: '#C63F00' };

assert.equal(
  hooks.tokenDraftValue('accent-token', 'light'),
  '#C63F0080',
  'A semantic token selected from Library remains linked and preserves opacity',
);

state.contextUnlinked = { 'accent-token::ondark': true };
state.contextOverrides = { 'accent-token::ondark::light': '#E84D0080' };
state.colorValueLabels['accent-token::ondark-light'] = { rgbHex: 'E84D00', label: 'Hue20 600' };

assert.equal(
  hooks.contextFieldValue('accent-token', 'ondark', 'light'),
  '#C63F0080',
  'A manually assigned context selected from Library remains linked',
);

state.contextOverrides['accent-token::ondark::light'] = '#ABCDEF80';
delete state.colorValueLabels['accent-token::ondark-light'];
assert.equal(
  hooks.contextFieldValue('accent-token', 'ondark', 'light'),
  '#ABCDEF80',
  'A Custom context value stays independent from palette edits',
);

const baselineSettings = hooks.captureDraftSettings();
const themeASettings = structuredClone(baselineSettings);
themeASettings.sourcePaletteOverrides = { Hue130: { 600: '#A1122C' } };
themeASettings.contextUnlinked = {};
themeASettings.contextOverrides = {};
themeASettings.colorValueLabels = {};
const themeBSettings = structuredClone(baselineSettings);
themeBSettings.sourcePaletteOverrides = { Hue130: { 600: '#1264B0' } };
themeBSettings.contextUnlinked = {};
themeBSettings.contextOverrides = {};
themeBSettings.colorValueLabels = {};

const workspace = (settings) => ({
  tokens: [structuredClone(token)],
  components: structuredClone(state.components),
  versions: [],
  published: null,
  publicationFailed: false,
  publicationError: '',
  palette: 'sber-base',
  customPalette: null,
  templateSettings: structuredClone(settings),
});
const draft = (settings) => ({
  changes: [],
  undoStack: [],
  redoStack: [],
  baseVersion: '0.0.0',
  settings: structuredClone(settings),
});

state.themeWorkspaces = {
  'theme-a': workspace(themeASettings),
  'theme-b': workspace(themeBSettings),
};
state.themeDrafts = {
  [`${state.userEmail.toLowerCase()}::theme-a`]: draft(themeASettings),
  [`${state.userEmail.toLowerCase()}::theme-b`]: draft(themeBSettings),
};
state.themeId = 'theme-a';
state.activeWorkspaceThemeId = null;
hooks.bindThemeWorkspace('theme-a');
assert.equal(hooks.tokenDraftValue('accent-token', 'light'), '#A1122C', 'Theme A uses its own palette draft');

state.sourcePaletteOverrides.Hue130[600] = '#B2243D';
state.themeId = 'theme-b';
hooks.activateThemeWorkspace('theme-b');
assert.equal(hooks.tokenDraftValue('accent-token', 'light'), '#1264B0', 'Theme B does not receive Theme A edits');

state.themeId = 'theme-a';
hooks.activateThemeWorkspace('theme-a');
assert.equal(hooks.tokenDraftValue('accent-token', 'light'), '#B2243D', 'Theme A draft is restored after switching back');

const releaseMarkup = hooks.releaseView();
assert.match(releaseMarkup, /<h1>Release<\/h1>/, 'Health and Versions share the Release entry point');
assert.match(releaseMarkup, /Version history/, 'Release contains version history');
assert.match(releaseMarkup, /Сквозная проверка/, 'Release renders the cross-section validation dashboard');
assert.match(releaseMarkup, /Components &amp; WCAG/, 'Release exposes component and accessibility coverage');
assert.doesNotMatch(releaseMarkup, /<h1>(Health|Versions)<\/h1>/, 'Legacy standalone page headings are absent');

const report = hooks.themeValidationReport();
assert.deepEqual(
  Object.keys(report.sections),
  ['palette', 'colors', 'foundations', 'components'],
  'Validation report has one stable source model for every editor section',
);
assert.ok(
  report.issues.some((issue) => issue.key === 'component:roles:button'),
  'Broken component semantic bindings are visible in the shared validation report',
);

state.sourcePaletteOverrides.Hue130[500] = state.sourcePaletteOverrides.Hue130[600];
const duplicateReport = hooks.themeValidationReport();
assert.ok(
  duplicateReport.issues.some((issue) => issue.key === 'palette:duplicates:Hue130'),
  'Palette health contributes duplicate swatches to the shared report',
);

state.tokens[0].paletteLinks.light = { row: 'MissingPalette', step: '600', match: 'file' };
const brokenLinkReport = hooks.themeValidationReport();
assert.ok(
  brokenLinkReport.issues.some((issue) => issue.key === 'colors:broken-link:accent-token:light' && issue.severity === 'Critical'),
  'Broken semantic-to-palette links are marked as critical',
);

const darkWcagIssue = brokenLinkReport.issues.find((issue) => issue.kind === 'component' && issue.mode === 'dark');
if (darkWcagIssue) {
  const releaseWithMode = hooks.releaseView();
  assert.match(
    releaseWithMode,
    new RegExp(`data-id="${darkWcagIssue.id}"[^>]*data-preview-mode="dark"`),
    'Dark component issue carries its preview mode to the source link',
  );
  if (darkWcagIssue.propId === 'icon') {
    assert.match(
      releaseWithMode,
      /data-prop-id="icon" data-prop-value="true"/,
      'An optional-icon WCAG issue carries the prop needed to reproduce it',
    );
  }
}

console.log('Palette cascade: OK');
