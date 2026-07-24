# Builder modules

`app.js` remains the application coordinator: it owns routing, browser events, rendering, and
the active workspace state. Stable domain configuration and pure calculations live here:

- `component-registry.js` — component catalog, semantic roles, defaults, and size presets.
- `component-accessibility.js` — real component contrast pairs for Light and Dark modes.
- `component-overrides.js` — immutable updates for component props, roles, and dimensions.
- `color-utils.js` — color conversion, luminance, and contrast calculations.
- `draft-settings.js` — the persisted draft schema and backward-compatible normalization.
- `token-naming.js` — canonical ids and human-readable semantic-token names.
- `theme-profiles.js` — isolated Base, Malachite, B2B, and Custom template profiles.
- `state-store.js` — storage keys, persisted-state migration, and token-schema hydration.

Modules in this directory do not access the DOM or mutate the application state. This keeps
them independently testable and makes UI changes less likely to break palette, token, or
component data.
