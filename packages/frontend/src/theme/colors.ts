export const colors = {
  primary: {
    main: '#e91e63',        // Pink - main brand color
    light: '#ff5983',       // Lighter pink
    dark: '#ad1457',        // Darker pink
    50: '#fce4ec',
    100: '#f8bbd9',
    200: '#f48fb1',
    300: '#f06292',
    400: '#ec407a',
    500: '#e91e63',
    600: '#d81b60',
    700: '#c2185b',
    800: '#ad1457',
    900: '#880e4f',
  },

  secondary: {
    main: '#ff5722',        // Orange-red
    light: '#ff8a50',       // Lighter orange
    dark: '#c41c00',        // Darker orange
    50: '#fff3e0',
    100: '#ffe0b2',
    200: '#ffcc80',
    300: '#ffb74d',
    400: '#ffa726',
    500: '#ff9800',
    600: '#fb8c00',
    700: '#f57c00',
    800: '#ef6c00',
    900: '#e65100',
  },

  gradients: {
    background: {
      start: '#667eea',     // Blue
      middle: '#764ba2',    // Purple
      end: '#ff6b6b',       // Coral
    },
    accent: {
      start: '#667eea',     // Blue
      end: '#764ba2',       // Purple
    },
    like: {
      start: '#11998e',     // Teal
      end: '#38ef7d',       // Green
    },
    dislike: {
      start: '#fc466b',     // Pink
      end: '#3f5efb',       // Blue
    },
  },

  neutral: {
    white: '#ffffff',
    black: '#000000',
    gray: {
      50: '#fafafa',
      100: '#f5f5f5',
      200: '#eeeeee',
      300: '#e0e0e0',
      400: '#bdbdbd',
      500: '#9e9e9e',
      600: '#757575',
      700: '#616161',
      800: '#424242',
      900: '#212121',
    },
  },

  semantic: {
    success: {
      main: '#4caf50',
      light: '#81c784',
      dark: '#388e3c',
    },
    error: {
      main: '#f44336',
      light: '#e57373',
      dark: '#d32f2f',
    },
    warning: {
      main: '#ff9800',
      light: '#ffb74d',
      dark: '#f57c00',
    },
    info: {
      main: '#2196f3',
      light: '#64b5f6',
      dark: '#1976d2',
    },
  },

  glass: {
    overlay: {
      light: 'rgba(255, 255, 255, 0.1)',
      medium: 'rgba(255, 255, 255, 0.2)',
      heavy: 'rgba(255, 255, 255, 0.3)',
    },
    dark: {
      light: 'rgba(0, 0, 0, 0.1)',
      medium: 'rgba(0, 0, 0, 0.3)',
      heavy: 'rgba(0, 0, 0, 0.6)',
      ultra: 'rgba(0, 0, 0, 0.8)',
      max: 'rgba(0, 0, 0, 0.9)',
    },
    border: {
      light: 'rgba(255, 255, 255, 0.1)',
      medium: 'rgba(255, 255, 255, 0.2)',
      heavy: 'rgba(255, 255, 255, 0.3)',
    },
  },

  text: {
    primary: '#212121',
    secondary: '#757575',
    disabled: '#bdbdbd',
    onDark: {
      primary: '#ffffff',
      secondary: 'rgba(255, 255, 255, 0.9)',
      tertiary: 'rgba(255, 255, 255, 0.8)',
      disabled: 'rgba(255, 255, 255, 0.5)',
    },
  },
} as const;

export const colorHelpers = {
  rgba: (hex: string, alpha: number) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  },

  gradient: (direction: string, colors: string[]) => {
    return `linear-gradient(${direction}, ${colors.join(', ')})`;
  },

  gradients: {
    background: `linear-gradient(135deg, #667eea 0%, #764ba2 50%, #ff6b6b 100%)`,
    card: `linear-gradient(135deg, #667eea 0%, #764ba2 100%)`,
    overlay: `linear-gradient(to bottom, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.2) 30%, rgba(0, 0, 0, 0.4) 60%, rgba(0, 0, 0, 0.8) 100%)`,
    contentOverlay: `linear-gradient(to top, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.7) 50%, transparent 100%)`,
    like: `linear-gradient(135deg, #11998e 0%, #38ef7d 100%)`,
    dislike: `linear-gradient(135deg, #fc466b 0%, #3f5efb 100%)`,
  },
};