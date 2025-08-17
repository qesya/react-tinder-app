import { render } from '@testing-library/react';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '@app/theme/theme';
import type { ReactNode } from 'react';

export const renderWithTheme = (ui: ReactNode) => {
  return render(
    <ThemeProvider theme={theme}>
      {ui}
    </ThemeProvider>
  );
};

export const createMockProfile = (overrides = {}) => ({
  id: 'test-profile-1',
  name: 'Test User',
  age: 25,
  bio: 'Test bio',
  photos: ['https://example.com/photo1.jpg'],
  location: {
    latitude: 40.7128,
    longitude: -74.0060,
    city: 'New York',
  },
  interests: ['travel', 'photography'],
  isActive: true,
  createdAt: new Date(),
  updatedAt: new Date(),
  ...overrides,
});

export const mockDragState = {
  isDragging: false,
  startX: 0,
  currentX: 0,
  currentY: 0,
};
