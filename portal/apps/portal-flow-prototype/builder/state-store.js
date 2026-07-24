export const storageKeys = {
  application: 'sdds-portal-flow-v6',
  portalSession: 'sdds-portal-session',
  anonymousOnboarding: 'sdds-onboarding-anon',
};

export function readJson(storage, key, fallback = null) {
  try {
    const value = storage?.getItem(key);
    return value ? JSON.parse(value) : fallback;
  } catch {
    return fallback;
  }
}

export function writeJson(storage, key, value) {
  try {
    storage?.setItem(key, JSON.stringify(value));
    return true;
  } catch {
    return false;
  }
}

export function mergeTokenCollections(baseTokens = [], currentTokens = []) {
  const currentIds = new Set(currentTokens.map((token) => token.id));
  return [
    ...currentTokens,
    ...baseTokens.filter((token) => !currentIds.has(token.id)),
  ].map((token) => (
    token.group === 'colors'
      ? {
        ...(baseTokens.find((item) => item.id === token.id && item.group === 'colors') || {}),
        ...token,
      }
      : token
  ));
}

export function hydratePersistedState(initialState, savedState = {}) {
  const merged = { ...structuredClone(initialState), ...(savedState || {}) };
  if (merged.route === 'health' || merged.route === 'versions') merged.route = 'release';

  merged.tokens = mergeTokenCollections(initialState.tokens, merged.tokens || []);
  Object.values(merged.themeWorkspaces || {}).forEach((workspace) => {
    workspace.tokens = mergeTokenCollections(initialState.tokens, workspace.tokens || []);
  });

  return merged;
}
