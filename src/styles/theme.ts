export const colors = {
  // Text colors
  textPrimary: '#000000',
  textSecondary: '#3C3C43', // 60% opacity
  textTertiary: '#3C3C43', // 30% opacity
  textQuaternary: '#3C3C43', // 18% opacity

  // Reverse Background
  reverseBackgroundPrimary: '#FFFFFF',
  reverseBackgroundSecondary: '#EBEBF5', // 60% opacity
  reverseBackgroundTertiary: '#EBEBF5', // 30% opacity
  reverseBackgroundQuaternary: '#EBEBF5', // 16% opacity

  // UI Colors / Neutral
  neutral100: '#FFFFFF',
  neutral200: '#F1F1F1',
  neutral300: '#E0E0E0',
  neutral400: '#B2B2B2',
  neutral500: '#828282',
  neutral600: '#686868',
  neutral700: '#505050',
  neutral800: '#333333',
  neutral900: '#161616',
  neutral950: '#000000',

  // UI Colors / Primary
  primary100: '#FCFFE8',
  primary200: '#F7FFC4',
  primary300: '#F2FF9E',
  primary400: '#E1FC56',
  primary500: '#CFFD0F',
  primary600: '#B1E30B',
  primary700: '#86BD08',
  primary800: '#619606',
  primary900: '#447303',

  // UI Colors / Warning
  warning100: '#FFF9E6',
  warning200: '#FFEDBF',
  warning300: '#FFDD99',
  warning400: '#FFB84D',
  warning500: '#FF8A00',
  warning600: '#E67300',
  warning700: '#BF5900',
  warning800: '#994200',
  warning900: '#732C00',

  // UI Colors / Error
  error100: '#FFF4EB',
  error200: '#FFDEC9',
  error300: '#FFC4A8',
  error400: '#FF8269',
  error500: '#FF2B27',
  error600: '#E62320',
  error700: '#BF1815',
  error800: '#99100E',
  error900: '#730A08',

  // UI Colors / Success
  success100: '#E1FAF2',
  success200: '#B6F2DC',
  success300: '#88E8C3',
  success400: '#41D98D',
  success500: '#00C853',
  success600: '#00B347',
  success700: '#009436',
  success800: '#007828',
  success900: '#00591B',

  // UI Colors / Others
  honey: '#FFBE08',
  orange: '#FF5607',
  dragonfruit: '#FF006E',
  grape: '#833BEC',
  blueberry: '#3A86FF',

  // System Colors
  systemBackground: '#F2F2F7',
  systemElevatedBackground: '#FFFFFF',
  systemBlurryOverlay: '#3C3C43', // 60% opacity
} as const;

export const theme = {
  colors,

  // Spacing
  spacing: {
    xs: '4px',
    sm: '8px',
    md: '12px',
    lg: '16px',
    xl: '20px',
    xxl: '24px',
    xxxl: '32px',
    huge: '40px',
  },

  // Typography
  typography: {
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
    fontSize: {
      xs: '12px',
      sm: '14px',
      md: '16px',
      lg: '18px',
      xl: '20px',
      xxl: '24px',
    },
    fontWeight: {
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
    },
    lineHeight: {
      tight: '1.2',
      normal: '1.4',
      relaxed: '1.5',
    },
  },

  // Border radius
  borderRadius: {
    sm: '2px',
    md: '8px',
    lg: '12px',
    xl: '20px',
    round: '50%',
  },

  // Transitions
  transition: {
    fast: '0.15s ease',
    normal: '0.2s ease',
    slow: '0.3s ease',
  },

  // Z-index
  zIndex: {
    dropdown: 1000,
    overlay: 1000,
    modal: 1001,
    tooltip: 1002,
  },

  // Breakpoints
  breakpoints: {
    mobile: '480px',
    tablet: '768px',
    desktop: '1024px',
    wide: '1200px',
  },

  // Semantic mappings (для удобства использования)
  semantic: {
    // Background colors
    backgroundPrimary: '#FFFFFF',
    backgroundSecondary: '#F2F2F7',
    backgroundOverlay: 'rgba(60, 60, 67, 0.6)',

    // Primary colors (используем primary500 как основной)
    primary: '#CFFD0F',
    primaryHover: '#B1E30B',
    primaryActive: '#86BD08',

    // Secondary colors (используем blueberry)
    secondary: '#3A86FF',
    secondaryHover: '#2968CC',

    // State colors
    success: '#00C853',
    warning: '#FF8A00',
    error: '#FF2B27',
    disabled: '#B2B2B2',

    // Text colors
    textPrimary: '#000000',
    textSecondary: '#3C3C43',
    textTertiary: '#828282',
    textLight: '#FFFFFF',

    // Border colors
    borderLight: '#E0E0E0',
    borderMedium: '#F1F1F1',
    borderDisabled: '#B2B2B2',

    // Interactive states
    hover: 'rgba(58, 134, 255, 0.05)',
    active: 'rgba(58, 134, 255, 0.1)',

    // Shadows
    shadowLight: '0 4px 12px rgba(0, 0, 0, 0.1)',
    shadowMedium: '0 6px 20px rgba(0, 0, 0, 0.15)',

    // Gradients
    gradientPrimary: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  }
} as const;

export type Theme = typeof theme;
export type Colors = typeof colors;