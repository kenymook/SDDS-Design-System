export function normalizeTokenPart(value) {
  return String(value || '').replace(/[\s_&-]+/g, '').toLowerCase();
}

export function slugFromTokenPath(path) {
  return path.join('-')
    .replace(/&/g, 'and')
    .replace(/[^a-zA-Z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .toLowerCase();
}

export function camelFromParts(parts) {
  return parts
    .filter(Boolean)
    .map((part, index) => {
      const clean = String(part).replace(/[^a-zA-Z0-9]/g, '');
      if (!clean) return '';
      return index === 0
        ? clean.charAt(0).toLowerCase() + clean.slice(1)
        : clean.charAt(0).toUpperCase() + clean.slice(1);
    })
    .join('');
}

export function colorTokenLabelFromPath(path) {
  const [section, context, ...rest] = path;
  const prefix = {
    'Text&Icons': 'text',
    Surfaces: 'surface',
    Outlines: 'outline',
    BG: 'bg',
    Overlay: 'overlay',
    Data: 'data',
    Syntax: 'syntax',
    TechnicalTokens: 'technical',
  }[section] || section;
  const prefixKey = normalizeTokenPart(prefix);
  const useful = rest
    .filter((part) => part !== 'General')
    .map((part) => {
      const normalized = normalizeTokenPart(part);
      return normalized.startsWith(prefixKey) && normalized.length > prefixKey.length
        ? String(part).slice(String(prefix).length)
        : part;
    })
    .filter(Boolean)
    .filter((part, index, list) => (
      index === 0 || normalizeTokenPart(part) !== normalizeTokenPart(list[index - 1])
    ))
    .filter((part, index, list) => !(
      index === 0
      && list[1]
      && normalizeTokenPart(list[1]).startsWith(normalizeTokenPart(part))
      && normalizeTokenPart(list[1]) !== normalizeTokenPart(part)
    ));

  return camelFromParts([prefix, ...useful])
    || camelFromParts([section, context, ...rest]);
}
