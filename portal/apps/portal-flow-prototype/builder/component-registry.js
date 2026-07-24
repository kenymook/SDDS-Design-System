export const componentCatalog = [
  { id: 'button', name: 'Button', property: 'height', value: '40', policy: 'editable' },
  { id: 'icon-button', name: 'IconButton', property: 'size', value: '36', policy: 'editable' },
  { id: 'link', name: 'Link', property: 'underlineOffset', value: '2', policy: 'editable' },
  { id: 'card', name: 'Card', property: 'padding', value: '20', policy: 'editable' },
  { id: 'modal', name: 'Modal', property: 'width', value: '480', policy: 'editable' },
  { id: 'input', name: 'Input', property: 'radius', value: '8', policy: 'restricted' },
  { id: 'select', name: 'Select', property: 'radius', value: '8', policy: 'restricted' },
  { id: 'checkbox', name: 'Checkbox', property: 'size', value: '20', policy: 'restricted' },
  { id: 'tooltip', name: 'Tooltip', property: 'delay', value: '300', policy: 'locked' },
  { id: 'typography', name: 'Typography', property: 'fontFamily', value: 'SB Sans Text', policy: 'locked' },
];

export const componentInstanceCounts = {
  button: 24,
  'icon-button': 18,
  link: 32,
  card: 16,
  modal: 6,
  input: 12,
  select: 9,
  checkbox: 14,
  tooltip: 11,
  typography: 36,
};

export const typographyFontFamilies = ['SB Sans Text', 'SB Sans Display', 'Inter', 'Arial', 'Roboto'];

export const componentLinkedTokens = {
  button: ['primary', 'on-primary', 'control-size', 'rounding'],
  'icon-button': ['primary', 'control-size', 'rounding'],
  link: ['primary', 'font-size'],
  card: ['rounding'],
  modal: ['rounding'],
  input: ['rounding', 'control-size', 'font-size'],
  select: ['rounding', 'control-size', 'font-size'],
  checkbox: ['primary', 'rounding'],
  tooltip: ['font-size'],
  typography: ['font-family', 'font-size'],
};

export const componentSemanticTokenPaths = {
  common: [
    'BG.Default.Primary',
    'Surfaces.Default.General.Solid.Primary',
    'Surfaces.Default.General.Solid.Secondary',
    'Surfaces.Default.General.Solid.Card',
    'Text&Icons.Default.General.Primary',
    'Text&Icons.Default.General.Secondary',
    'Outlines.Default.General.Solid.Primary',
    'Outlines.Default.Accent.Solid.Accent',
  ],
  button: [
    'Surfaces.Default.Accent.Solid.Accent',
    'Surfaces.Default.Accent.Solid.AccentMinor',
    'Text&Icons.Default.General.Primary',
    'Outlines.Default.Accent.Solid.Accent',
  ],
  'icon-button': [
    'Surfaces.Default.Accent.Solid.Accent',
    'Surfaces.Default.Accent.Solid.AccentMinor',
    'Text&Icons.Default.General.Primary',
    'Outlines.Default.Accent.Solid.Accent',
  ],
  link: [
    'Text&Icons.Default.Accent.Accent',
    'Outlines.Default.Accent.Solid.Accent',
  ],
  card: [
    'Surfaces.Default.General.Solid.Card',
    'Text&Icons.Default.General.Primary',
    'Text&Icons.Default.General.Secondary',
    'Outlines.Default.General.Solid.Primary',
  ],
  modal: [
    'Surfaces.Default.General.Solid.Card',
    'Text&Icons.Default.General.Primary',
    'Text&Icons.Default.General.Secondary',
    'Outlines.Default.General.Solid.Primary',
    'Surfaces.Default.Accent.Solid.Accent',
  ],
  input: [
    'Surfaces.Default.General.Solid.Primary',
    'Text&Icons.Default.General.Primary',
    'Text&Icons.Default.General.Secondary',
    'Outlines.Default.General.Solid.Primary',
    'Outlines.Default.Accent.Solid.Accent',
  ],
  select: [
    'Surfaces.Default.General.Solid.Primary',
    'Text&Icons.Default.General.Primary',
    'Text&Icons.Default.General.Secondary',
    'Outlines.Default.General.Solid.Primary',
    'Outlines.Default.Accent.Solid.Accent',
  ],
  checkbox: [
    'Surfaces.Default.Accent.Solid.Accent',
    'Text&Icons.Default.General.Primary',
    'Outlines.Default.Accent.Solid.Accent',
  ],
  tooltip: [
    'Surfaces.Default.General.Solid.Card',
    'Text&Icons.Default.General.Primary',
    'Text&Icons.Default.General.Secondary',
  ],
  typography: [
    'Text&Icons.Default.General.Primary',
    'Text&Icons.Default.General.Secondary',
    'Outlines.Default.Accent.Solid.Accent',
  ],
};

export const componentStyleRoleDefs = [
  { id: 'background', label: 'Background', cssVar: '--component-accent', defaultPath: 'Surfaces.Default.Accent.Solid.Accent', fallbackIds: ['primary'] },
  { id: 'backgroundHover', label: 'Background hover', cssVar: '--component-accent-hover', defaultPath: 'Surfaces.Default.Accent.Solid.AccentMinor', fallbackIds: ['primary'] },
  { id: 'backgroundDisabled', label: 'Background disabled', cssVar: '--component-disabled-bg', defaultPath: 'Surfaces.Default.General.Solid.Secondary', fallbackIds: ['surface-hover'] },
  { id: 'text', label: 'Text', cssVar: '--component-on-accent', defaultPath: 'Text&Icons.Default.General.Primary', fallbackIds: ['on-primary', 'text-primary'] },
  { id: 'textDisabled', label: 'Text disabled', cssVar: '--component-disabled-text', defaultPath: 'Text&Icons.Default.General.Secondary', fallbackIds: ['text-secondary'] },
  { id: 'icon', label: 'Icon', cssVar: '--component-icon', defaultPath: 'Text&Icons.Default.General.Primary', fallbackIds: ['on-primary', 'text-primary'] },
  { id: 'surface', label: 'Surface', cssVar: '--component-surface', defaultPath: 'Surfaces.Default.General.Solid.Card', fallbackIds: ['surface-default'] },
  { id: 'textPrimary', label: 'Content text', cssVar: '--component-text', defaultPath: 'Text&Icons.Default.General.Primary', fallbackIds: ['text-primary'] },
  { id: 'textSecondary', label: 'Secondary text', cssVar: '--component-muted', defaultPath: 'Text&Icons.Default.General.Secondary', fallbackIds: ['text-secondary'] },
  { id: 'border', label: 'Border', cssVar: '--component-outline', defaultPath: 'Outlines.Default.General.Solid.Primary', fallbackIds: ['outline-default'] },
  { id: 'borderHover', label: 'Border hover', cssVar: '--component-outline-hover', defaultPath: 'Outlines.Default.Accent.Solid.Accent', fallbackIds: ['outline-focus'] },
  { id: 'borderDisabled', label: 'Border disabled', cssVar: '--component-outline-disabled', defaultPath: 'Outlines.Default.General.Solid.Primary', fallbackIds: ['outline-default'] },
  { id: 'focus', label: 'Focus outline', cssVar: '--component-focus', defaultPath: 'Outlines.Default.Accent.Solid.Accent', fallbackIds: ['outline-focus'] },
  { id: 'canvas', label: 'Canvas', cssVar: '--component-bg', defaultPath: 'BG.Default.Primary', fallbackIds: ['bg-default'] },
];

export const componentStyleRolesByComponent = {
  button: ['background', 'backgroundHover', 'backgroundDisabled', 'text', 'textDisabled', 'icon', 'focus'],
  'icon-button': ['background', 'backgroundHover', 'backgroundDisabled', 'icon', 'textDisabled', 'focus'],
  link: ['background', 'textPrimary', 'textDisabled', 'focus'],
  card: ['surface', 'textPrimary', 'textSecondary', 'border', 'borderHover', 'focus'],
  modal: ['surface', 'textPrimary', 'textSecondary', 'border', 'background', 'focus'],
  input: ['surface', 'textPrimary', 'textSecondary', 'border', 'borderHover', 'borderDisabled', 'focus'],
  select: ['surface', 'textPrimary', 'textSecondary', 'border', 'borderHover', 'borderDisabled', 'focus'],
  checkbox: ['background', 'backgroundDisabled', 'textPrimary', 'textDisabled', 'border', 'focus'],
  tooltip: ['surface', 'textPrimary', 'textSecondary'],
  typography: ['textPrimary', 'textSecondary', 'background'],
};

export const componentStyleSizeDefs = [
  { id: 'height', label: 'Height', fallback: 40, min: 24, max: 96, components: ['button', 'input', 'select'] },
  { id: 'width', label: 'Width', fallback: 40, min: 24, max: 96, components: ['icon-button'] },
  { id: 'padding', label: 'Padding', fallback: 20, min: 0, max: 80, components: ['button', 'card', 'modal', 'tooltip'] },
  { id: 'gap', label: 'Gap', fallback: 10, min: 0, max: 32, components: ['button', 'checkbox', 'input', 'select'] },
  { id: 'radius', label: 'Radius', fallback: 8, min: 0, max: 32, components: ['button', 'icon-button', 'card', 'modal', 'input', 'select', 'tooltip'] },
];

export const componentPropDefaults = {
  button: {
    label: 'Primary action',
    size: 'm',
    icon: false,
    iconPosition: 'start',
    disabled: false,
    loading: false,
    fullWidth: false,
  },
  'icon-button': {
    ariaLabel: 'Добавить',
    size: 'm',
    icon: 'plus',
    disabled: false,
    loading: false,
  },
};

const componentSizePresets = {
  button: {
    s: { height: 32, padding: 14, gap: 6 },
    m: { height: 40, padding: 20, gap: 8 },
    l: { height: 48, padding: 24, gap: 10 },
  },
  'icon-button': {
    s: { width: 32 },
    m: { width: 36 },
    l: { width: 40 },
  },
};

export function createComponentCatalog() {
  return componentCatalog.map((component) => ({ ...component }));
}

export function mergeComponentProps(componentId, overrides = {}) {
  return {
    ...(componentPropDefaults[componentId] || {}),
    ...(overrides || {}),
  };
}

export function resolveComponentSizePreset(componentId, size, sizeId, fallback) {
  return componentSizePresets[componentId]?.[size]?.[sizeId] ?? fallback;
}
