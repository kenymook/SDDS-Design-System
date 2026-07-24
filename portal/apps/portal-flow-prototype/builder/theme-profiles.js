export const themePaletteProfiles = {
  'sber-base': {
    aliases: {
      primary: '#108E26',
      'on-primary': '#FFFFFF',
      'primary:dark': '#1A9E32',
      'on-primary:dark': '#07150A',
    },
  },
  'sber-malachite': {
    categoryRows: { accent: 'Hue190' },
    aliases: {
      primary: '#107F8C',
      'on-primary': '#FFFFFF',
      'primary:dark': '#19B9A5',
      'on-primary:dark': '#031716',
    },
  },
  'sber-b2b': {
    categoryRows: { neutral: 'Cool Gray', accent: 'Cool Gray' },
    aliases: {
      primary: '#1B1D22',
      'on-primary': '#FFFFFF',
      'primary:dark': '#F8FAFC',
      'on-primary:dark': '#111827',
    },
  },
  custom: {
    custom: true,
    aliases: {
      primary: '#556070',
      'on-primary': '#F8FAFC',
      background: '#FFFFFF',
      text: '#111827',
    },
  },
};

export function paletteLabel(value) {
  return {
    'sber-base': 'Base',
    'sber-malachite': 'Malachite',
    'sber-b2b': 'B2B',
    custom: 'Custom',
    'sdds-base': 'Base',
    contrast: 'B2B',
  }[value] || 'Base';
}
