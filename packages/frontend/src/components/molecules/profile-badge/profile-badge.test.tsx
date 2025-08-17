import { describe, it, expect } from 'vitest';
import { screen } from '@testing-library/react';
import { ProfileBadge } from './profile-badge';
import { renderWithTheme, createMockProfile } from '@app/test/test-utils';

describe('ProfileBadge Component', () => {
  it('renders profile information', () => {
    const profile = createMockProfile({
      name: 'Alice',
      age: 28,
      bio: 'Love adventures and coffee'
    });

    renderWithTheme(<ProfileBadge profile={profile} />);
    
    expect(screen.getByText('Alice')).toBeInTheDocument();
    expect(screen.getByText('28')).toBeInTheDocument();
    expect(screen.getByText('Love adventures and coffee')).toBeInTheDocument();
  });

  it('renders without bio', () => {
    const profile = createMockProfile({
      name: 'Bob',
      age: 25,
      bio: undefined
    });

    renderWithTheme(<ProfileBadge profile={profile} />);
    
    expect(screen.getByText('Bob')).toBeInTheDocument();
    expect(screen.getByText('25')).toBeInTheDocument();
  });

  it('renders with empty bio', () => {
    const profile = createMockProfile({
      name: 'Charlie',
      age: 30,
      bio: ''
    });

    renderWithTheme(<ProfileBadge profile={profile} />);
    
    expect(screen.getByText('Charlie')).toBeInTheDocument();
    expect(screen.getByText('30')).toBeInTheDocument();
  });

  it('renders with long bio', () => {
    const longBio = 'I am a passionate traveler who loves exploring new cultures and meeting interesting people from around the world.';
    const profile = createMockProfile({
      name: 'Diana',
      age: 26,
      bio: longBio
    });

    renderWithTheme(<ProfileBadge profile={profile} />);
    
    expect(screen.getByText('Diana')).toBeInTheDocument();
    expect(screen.getByText('26')).toBeInTheDocument();
    expect(screen.getByText(longBio)).toBeInTheDocument();
  });

  it('handles special characters in name', () => {
    const profile = createMockProfile({
      name: 'José María',
      age: 32,
      bio: 'Hola mundo! 😊'
    });

    renderWithTheme(<ProfileBadge profile={profile} />);
    
    expect(screen.getByText('José María')).toBeInTheDocument();
    expect(screen.getByText('32')).toBeInTheDocument();
    expect(screen.getByText('Hola mundo! 😊')).toBeInTheDocument();
  });
});
