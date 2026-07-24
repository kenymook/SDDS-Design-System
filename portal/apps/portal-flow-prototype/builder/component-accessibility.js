import { contrastRatio } from './color-utils.js';

export function buildComponentAccessibilityPairs({
  component,
  roleIds,
  activePropsOnly = false,
  componentProps = {},
  resolveBinding,
  resolveValue,
}) {
  if (!component) return [];

  const roles = new Set(roleIds || []);
  if (activePropsOnly && component.id === 'button' && !componentProps.icon) {
    roles.delete('icon');
  }
  if (roles.has('focus') && !roles.has('surface')) roles.add('canvas');

  const pairs = [];
  const addPair = (stateLabel, backgroundRole, foregroundRole, threshold, kind) => {
    if (!roles.has(backgroundRole) || !roles.has(foregroundRole)) return;

    ['light', 'dark'].forEach((mode) => {
      const backgroundBinding = resolveBinding(backgroundRole);
      const foregroundBinding = resolveBinding(foregroundRole);
      const background = resolveValue(backgroundBinding, mode);
      const foreground = resolveValue(foregroundBinding, mode);
      const ratio = contrastRatio(background, foreground);
      pairs.push({
        componentId: component.id,
        componentName: component.name,
        stateLabel,
        kind,
        mode,
        backgroundRole,
        foregroundRole,
        backgroundBinding,
        foregroundBinding,
        background,
        foreground,
        ratio,
        threshold,
        pass: ratio !== null && ratio >= threshold,
      });
    });
  };

  if (roles.has('background')) {
    if (roles.has('text')) addPair('Default', 'background', 'text', 4.5, 'Text');
    if (roles.has('icon')) addPair('Default', 'background', 'icon', 3, 'UI');
    if (roles.has('backgroundHover') && roles.has('text')) {
      addPair('Hover', 'backgroundHover', 'text', 4.5, 'Text');
    }
    if (roles.has('backgroundHover') && roles.has('icon')) {
      addPair('Hover', 'backgroundHover', 'icon', 3, 'UI');
    }
    if (roles.has('backgroundDisabled') && roles.has('textDisabled')) {
      addPair('Disabled', 'backgroundDisabled', 'textDisabled', 4.5, 'Text');
    }
  }

  if (roles.has('surface')) {
    if (roles.has('textPrimary')) addPair('Default', 'surface', 'textPrimary', 4.5, 'Text');
    if (roles.has('textSecondary')) addPair('Secondary', 'surface', 'textSecondary', 4.5, 'Text');
    if (roles.has('border')) addPair('Default', 'surface', 'border', 3, 'UI');
    if (roles.has('borderHover')) addPair('Hover', 'surface', 'borderHover', 3, 'UI');
    if (roles.has('borderDisabled')) addPair('Disabled', 'surface', 'borderDisabled', 3, 'UI');
  }

  const focusBackground = roles.has('canvas') ? 'canvas' : roles.has('surface') ? 'surface' : '';
  if (focusBackground && roles.has('focus')) {
    addPair('Focus', focusBackground, 'focus', 3, 'UI');
  }

  return pairs;
}
