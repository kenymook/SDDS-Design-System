export const draftSettingKeys = [
  'sourcePaletteMode',
  'sourcePaletteOverrides',
  'sourcePaletteRowSources',
  'sourcePaletteDisabledRows',
  'sourcePaletteAddedRowsByCategory',
  'sourcePaletteCustomCategories',
  'contextUnlinked',
  'contextOverrides',
  'colorValueLabels',
  'componentStyleOverrides',
];

export function normalizeComponentStyleSettings(value = {}, propDefaults = {}) {
  const result = structuredClone(value || {});
  Object.entries(result).forEach(([componentId, component]) => {
    Object.keys(component?.roles || {}).forEach((roleId) => {
      component.roles[roleId] = String(component.roles[roleId])
        .replace(/^(context:[^:]+:(?:ondark|onlight|inverse)):(?:light|dark)$/, '$1');
    });
    Object.keys(component?.props || {}).forEach((propId) => {
      if (component.props[propId] === propDefaults[componentId]?.[propId]) {
        delete component.props[propId];
      }
    });
    if (component?.props && !Object.keys(component.props).length) delete component.props;
  });
  return result;
}
