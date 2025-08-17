import { describe, it, expect } from 'vitest';
import { screen } from '@testing-library/react';
import { Avatar } from './avatar';
import { renderWithTheme } from '@app/test/test-utils';

describe('Avatar Component', () => {
  it('renders with image source', () => {
    renderWithTheme(
      <Avatar 
        src="https://example.com/avatar.jpg" 
        alt="Test User" 
      />
    );
    
    const avatar = screen.getByRole('img', { name: /test user/i });
    expect(avatar).toBeInTheDocument();
    expect(avatar).toHaveAttribute('src', 'https://example.com/avatar.jpg');
  });

  it('renders with different sizes', () => {
    renderWithTheme(
      <Avatar 
        src="https://example.com/avatar.jpg" 
        alt="Test User"
        size="large"
      />
    );
    
    const avatar = screen.getByRole('img');
    expect(avatar).toBeInTheDocument();
  });

  it('renders without image source', () => {
    renderWithTheme(<Avatar alt="No Image" />);
    
    const avatar = screen.getByLabelText(/no image/i);
    expect(avatar).toBeInTheDocument();
  });

  it('handles missing alt text gracefully', () => {
    renderWithTheme(<Avatar src="https://example.com/avatar.jpg" />);
    
    const avatar = screen.getByRole('img');
    expect(avatar).toBeInTheDocument();
  });
});
