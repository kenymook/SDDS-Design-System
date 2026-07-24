import assert from 'node:assert/strict';
import {
  contrastRatio,
  hexToRgba,
  hslToRgb,
  rgbaToHex,
  rgbToHsl,
} from '../builder/color-utils.js';
import {
  componentPropDefaults,
  createComponentCatalog,
  mergeComponentProps,
  resolveComponentSizePreset,
} from '../builder/component-registry.js';
import { buildComponentAccessibilityPairs } from '../builder/component-accessibility.js';
import { normalizeComponentStyleSettings } from '../builder/draft-settings.js';
import { colorTokenLabelFromPath, slugFromTokenPath } from '../builder/token-naming.js';
import { paletteLabel, themePaletteProfiles } from '../builder/theme-profiles.js';
import {
  hydratePersistedState,
  mergeTokenCollections,
  readJson,
  writeJson,
} from '../builder/state-store.js';
import {
  clearComponentSizes,
  setComponentProp,
  setComponentRole,
  setComponentSize,
} from '../builder/component-overrides.js';

const rgba = hexToRgba('#108E2680');
assert.equal(rgba.r, 16);
assert.equal(rgba.g, 142);
assert.equal(rgba.b, 38);
assert.ok(Math.abs(rgba.a - (128 / 255)) < 0.001);
assert.equal(rgbaToHex({ r: 16, g: 142, b: 38 }), '#108e26');
assert.equal(rgbaToHex({ r: 16, g: 142, b: 38, a: 0.5 }), '#108e2680');

const hsl = rgbToHsl({ r: 16, g: 142, b: 38 });
const roundTrip = hslToRgb(hsl);
assert.ok(Math.abs(roundTrip.r - 16) < 2);
assert.ok(Math.abs(roundTrip.g - 142) < 2);
assert.ok(Math.abs(roundTrip.b - 38) < 2);
assert.equal(Number(contrastRatio('#ffffff', '#000000').toFixed(1)), 21);

const firstCatalog = createComponentCatalog();
const secondCatalog = createComponentCatalog();
firstCatalog[0].value = '999';
assert.equal(secondCatalog[0].value, '40', 'catalog instances must not share mutable state');
assert.deepEqual(
  mergeComponentProps('button', { icon: true }),
  { ...componentPropDefaults.button, icon: true },
);
assert.equal(resolveComponentSizePreset('button', 'l', 'height', 40), 48);
assert.equal(resolveComponentSizePreset('icon-button', 's', 'width', 40), 32);

const normalized = normalizeComponentStyleSettings({
  button: {
    roles: { text: 'context:text-primary:ondark:dark' },
    props: { size: 'm', icon: true },
  },
}, componentPropDefaults);
assert.equal(normalized.button.roles.text, 'context:text-primary:ondark');
assert.deepEqual(normalized.button.props, { icon: true });

assert.equal(
  colorTokenLabelFromPath(['Text&Icons', 'Default', 'General', 'Primary']),
  'textPrimary',
);
assert.equal(slugFromTokenPath(['Text&Icons', 'Default', 'Primary']), 'textandicons-default-primary');
assert.equal(paletteLabel('sber-b2b'), 'B2B');
assert.equal(themePaletteProfiles['sber-malachite'].categoryRows.accent, 'Hue190');

const bindingValues = {
  background: { light: '#000000', dark: '#ffffff' },
  text: { light: '#ffffff', dark: '#000000' },
  icon: { light: '#777777', dark: '#777777' },
  focus: { light: '#ffffff', dark: '#000000' },
  canvas: { light: '#000000', dark: '#ffffff' },
};
const pairs = buildComponentAccessibilityPairs({
  component: { id: 'button', name: 'Button' },
  roleIds: ['background', 'text', 'icon', 'focus'],
  activePropsOnly: true,
  componentProps: { icon: false },
  resolveBinding: (roleId) => roleId,
  resolveValue: (binding, mode) => bindingValues[binding][mode],
});
assert.equal(pairs.length, 4, 'hidden button icon must not create accessibility pairs');
assert.ok(pairs.every((pair) => pair.pass));

const mergedTokens = mergeTokenCollections(
  [{ id: 'color', group: 'colors', value: '#000000', hint: 'base metadata' }, { id: 'size', group: 'sizes', value: '40' }],
  [{ id: 'color', group: 'colors', value: '#ffffff' }],
);
assert.deepEqual(mergedTokens[0], {
  id: 'color',
  group: 'colors',
  value: '#ffffff',
  hint: 'base metadata',
});
assert.equal(mergedTokens[1].id, 'size');

const hydrated = hydratePersistedState(
  { route: 'portal-home', tokens: [{ id: 'color', group: 'colors', value: '#000000' }], themeWorkspaces: {} },
  { route: 'health', tokens: [], themeWorkspaces: { light: { tokens: [] } } },
);
assert.equal(hydrated.route, 'release');
assert.equal(hydrated.tokens.length, 1);
assert.equal(hydrated.themeWorkspaces.light.tokens.length, 1);

const memory = new Map();
const storage = {
  getItem: (key) => memory.get(key) ?? null,
  setItem: (key, value) => memory.set(key, value),
};
assert.equal(writeJson(storage, 'test', { value: 1 }), true);
assert.deepEqual(readJson(storage, 'test'), { value: 1 });

let overrides = setComponentProp({}, 'button', 'icon', true, false);
overrides = setComponentRole(overrides, 'button', 'text', 'text-secondary', 'text-primary');
overrides = setComponentSize(overrides, 'button', 'height', '48');
assert.equal(overrides.button.props.icon, true);
assert.equal(overrides.button.roles.text, 'text-secondary');
assert.equal(overrides.button.sizes.height, '48');
overrides = clearComponentSizes(overrides, 'button', ['height']);
overrides = setComponentProp(overrides, 'button', 'icon', false, false);
overrides = setComponentRole(overrides, 'button', 'text', 'text-primary', 'text-primary');
assert.equal(overrides.button, undefined, 'empty component overrides must be removed');

console.log('Builder modules: OK');
