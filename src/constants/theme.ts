export const Colors = {
  dark: {
    background: '#000000',
    surface: '#0A0A0A',
    surface2: '#111111',
    surface3: '#161616',
    surface4: '#0D0D0D',
    surface5: '#080808',
    surface6: '#121212',

    border: '#1A1A1A',
    border2: '#262626',
    border3: '#1F1F1F',
    border4: '#2A2A2A',
    border5: '#1C1C1C',

    primary: '#FFFFFF',
    secondary: 'rgba(255,255,255,0.7)',
    tertiary: 'rgba(255,255,255,0.5)',
    quaternary: 'rgba(255,255,255,0.35)',
    quinary: 'rgba(255,255,255,0.2)',

    accent: '#15803D',
    accentMuted: 'rgba(21,128,61,0.14)',

    error: '#FFFFFF',
    errorMuted: 'rgba(255,255,255,0.1)',

    success: '#15803D',
    successMuted: 'rgba(21,128,61,0.12)',
    successText: '#15803D',
  },

  light: {
    background: '#FFFFFF',
    surface: '#F5F5F5',
    surface2: '#EEEEEE',
    surface3: '#E8E8E8',
    surface4: '#F0F0F0',
    surface5: '#FAFAFA',
    surface6: '#EBEBEB',

    border: '#E0E0E0',
    border2: '#D0D0D0',
    border3: '#C8C8C8',
    border4: '#D8D8D8',
    border5: '#D5D5D5',

    primary: '#000000',
    secondary: 'rgba(0,0,0,0.65)',
    tertiary: 'rgba(0,0,0,0.45)',
    quaternary: 'rgba(0,0,0,0.3)',
    quinary: 'rgba(0,0,0,0.2)',

    accent: '#15803D',
    accentMuted: 'rgba(21,128,61,0.12)',

    error: '#000000',
    errorMuted: 'rgba(0,0,0,0.08)',

    success: '#15803D',
    successMuted: 'rgba(21,128,61,0.1)',
    successText: '#15803D',
  },
} as const;

export type ThemeMode = 'dark' | 'light';

export type ThemeColors = (typeof Colors)[ThemeMode];

export const getThemeColors = (theme: ThemeMode): ThemeColors => Colors[theme];
