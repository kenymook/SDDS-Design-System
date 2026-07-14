export const sddsTokens = {
  "--sdds-bg-default-primary": "#0F141A",
  "--sdds-surface-default-solid-card": "#151B23",
  "--sdds-surface-default-solid-secondary": "#1B2430",
  "--sdds-surface-default-solid-hover": "#222D3A",
  "--sdds-surface-default-solid-active": "#263445",
  "--sdds-outline-default-solid-primary": "#2A3441",
  "--sdds-outline-default-solid-hover": "#3A4655",
  "--sdds-text-default-primary": "#E8EEF5",
  "--sdds-text-default-secondary": "#9AA7B4",
  "--sdds-text-default-tertiary": "#6F7D8C",
  "--sdds-surface-default-accent-solid": "#2ED573",
  "--sdds-surface-default-accent-transparent": "rgba(46,213,115,0.12)",
  "--sdds-surface-default-negative-solid": "#FF5A5F",
} as React.CSSProperties;

const token = (name: string) => "var(" + name + ")";

export const T = {
  bg: token("--sdds-bg-default-primary"),
  panel: token("--sdds-surface-default-solid-card"),
  panel2: token("--sdds-surface-default-solid-secondary"),
  hover: token("--sdds-surface-default-solid-hover"),
  active: token("--sdds-surface-default-solid-active"),
  border: token("--sdds-outline-default-solid-primary"),
  borderHover: token("--sdds-outline-default-solid-hover"),
  text: token("--sdds-text-default-primary"),
  muted: token("--sdds-text-default-secondary"),
  subtle: token("--sdds-text-default-tertiary"),
  accent: token("--sdds-surface-default-accent-solid"),
  accentSoft: token("--sdds-surface-default-accent-transparent"),
  danger: token("--sdds-surface-default-negative-solid"),
};

export const transition = "background .16s ease, border-color .16s ease, color .16s ease";
