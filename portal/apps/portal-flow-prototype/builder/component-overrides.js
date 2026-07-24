function cloneComponentOverride(overrides, componentId) {
  const current = overrides?.[componentId] || {};
  return {
    ...current,
    roles: { ...(current.roles || {}) },
    sizes: { ...(current.sizes || {}) },
    props: { ...(current.props || {}) },
  };
}

function compactComponentOverride(overrides, componentId, component) {
  const compact = { ...component };
  ['roles', 'sizes', 'props'].forEach((key) => {
    if (!Object.keys(compact[key] || {}).length) delete compact[key];
  });

  const next = { ...(overrides || {}) };
  if (Object.keys(compact).length) next[componentId] = compact;
  else delete next[componentId];
  return next;
}

export function setComponentProp(overrides, componentId, propId, value, defaultValue) {
  const component = cloneComponentOverride(overrides, componentId);
  if (value === defaultValue) delete component.props[propId];
  else component.props[propId] = value;
  return compactComponentOverride(overrides, componentId, component);
}

export function setComponentRole(overrides, componentId, roleId, value, defaultValue) {
  const component = cloneComponentOverride(overrides, componentId);
  if (value === defaultValue) delete component.roles[roleId];
  else component.roles[roleId] = value;
  return compactComponentOverride(overrides, componentId, component);
}

export function setComponentSize(overrides, componentId, sizeId, value) {
  const component = cloneComponentOverride(overrides, componentId);
  component.sizes[sizeId] = value;
  return compactComponentOverride(overrides, componentId, component);
}

export function clearComponentSizes(overrides, componentId, sizeIds = []) {
  const component = cloneComponentOverride(overrides, componentId);
  sizeIds.forEach((sizeId) => delete component.sizes[sizeId]);
  return compactComponentOverride(overrides, componentId, component);
}
