import { describe, it, expect, vi } from 'vitest';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Button } from './button';
import { renderWithTheme } from '@app/test/test-utils';

describe('Button Component', () => {
  it('renders with default props', () => {
    renderWithTheme(<Button>Click me</Button>);
    const button = screen.getByRole('button', { name: /click me/i });
    expect(button).toBeInTheDocument();
  });

  it('renders with custom variant', () => {
    renderWithTheme(<Button variant="like">Like</Button>);
    const button = screen.getByRole('button', { name: /like/i });
    expect(button).toBeInTheDocument();
  });

  it('handles click events', async () => {
    const handleClick = vi.fn();
    const user = userEvent.setup();
    
    renderWithTheme(<Button onClick={handleClick}>Click me</Button>);
    const button = screen.getByRole('button', { name: /click me/i });
    
    await user.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('renders in disabled state', () => {
    renderWithTheme(<Button disabled>Disabled</Button>);
    const button = screen.getByRole('button', { name: /disabled/i });
    expect(button).toBeDisabled();
  });

  it('renders different sizes', () => {
    renderWithTheme(<Button size="small">Small</Button>);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('renders like variant', () => {
    renderWithTheme(<Button variant="like">♥</Button>);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  });

  it('renders dislike variant', () => {
    renderWithTheme(<Button variant="dislike">✕</Button>);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  });
});
