import { createTheme, type ThemeOptions } from '@mui/material/styles';
import { colors, colorHelpers } from './colors';

declare module '@mui/material/styles' {
  interface Theme {
    customColors: typeof colors;
    gradients: typeof colorHelpers.gradients;
  }

  interface ThemeOptions {
    customColors?: typeof colors;
    gradients?: typeof colorHelpers.gradients;
  }
}

const themeOptions: ThemeOptions = {
  palette: {
    primary: {
      main: colors.primary.main,
      light: colors.primary.light,
      dark: colors.primary.dark,
      50: colors.primary[50],
      100: colors.primary[100],
      200: colors.primary[200],
      300: colors.primary[300],
      400: colors.primary[400],
      500: colors.primary[500],
      600: colors.primary[600],
      700: colors.primary[700],
      800: colors.primary[800],
      900: colors.primary[900],
    } as any,
    secondary: {
      main: colors.secondary.main,
      light: colors.secondary.light,
      dark: colors.secondary.dark,
    },
    error: {
      main: colors.semantic.error.main,
      light: colors.semantic.error.light,
      dark: colors.semantic.error.dark,
    },
    warning: {
      main: colors.semantic.warning.main,
      light: colors.semantic.warning.light,
      dark: colors.semantic.warning.dark,
    },
    info: {
      main: colors.semantic.info.main,
      light: colors.semantic.info.light,
      dark: colors.semantic.info.dark,
    },
    success: {
      main: colors.semantic.success.main,
      light: colors.semantic.success.light,
      dark: colors.semantic.success.dark,
    },
    background: {
      default: colors.neutral.gray[50],
      paper: colors.neutral.white,
    },
    text: {
      primary: colors.text.primary,
      secondary: colors.text.secondary,
      disabled: colors.text.disabled,
    },
    grey: colors.neutral.gray,
  },

  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '2rem',
      fontWeight: 700,
      color: colors.text.primary,
    },
    h2: {
      fontSize: '1.5rem',
      fontWeight: 600,
      color: colors.text.primary,
    },
    h3: {
      fontSize: '1.25rem',
      fontWeight: 600,
      color: colors.text.primary,
    },
    body1: {
      fontSize: '1rem',
      fontWeight: 400,
      color: colors.text.primary,
    },
    body2: {
      fontSize: '0.875rem',
      fontWeight: 400,
      color: colors.text.secondary,
    },
    caption: {
      fontSize: '0.75rem',
      fontWeight: 400,
      color: colors.text.secondary,
    },
  },

  customColors: colors,
  gradients: colorHelpers.gradients,

  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: {
          width: '100%',
          height: '100%',
          margin: 0,
          padding: 0,
        },
        body: {
          width: '100%',
          height: '100%',
          margin: 0,
          padding: 0,
          backgroundColor: colors.neutral.gray[50],
        },
        '#root': {
          width: '100%',
          height: '100%',
        },
      },
    },

    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          textTransform: 'none',
          fontWeight: 600,
          padding: '12px 24px',
        },
        contained: {
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
          '&:hover': {
            boxShadow: '0 6px 16px rgba(0, 0, 0, 0.2)',
          },
        },
      },
    },

    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
          backdropFilter: 'blur(10px)',
          border: `1px solid ${colors.glass.border.light}`,
        },
      },
    },
  },

  shape: {
    borderRadius: 12,
  },

  shadows: [
    'none',
    '0 2px 4px rgba(0, 0, 0, 0.05)',
    '0 4px 8px rgba(0, 0, 0, 0.1)',
    '0 8px 16px rgba(0, 0, 0, 0.1)',
    '0 12px 24px rgba(0, 0, 0, 0.15)',
    '0 16px 32px rgba(0, 0, 0, 0.15)',
    '0 20px 40px rgba(0, 0, 0, 0.2)',
    '0 24px 48px rgba(0, 0, 0, 0.2)',
    '0 32px 64px rgba(0, 0, 0, 0.25)',
    ...Array(16).fill('0 32px 64px rgba(0, 0, 0, 0.25)'), // Fill remaining shadow levels
  ] as any,
};

export const theme = createTheme(themeOptions);
export default theme;