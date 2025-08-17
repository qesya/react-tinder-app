import { describe, it, expect, vi } from 'vitest';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ActionBar } from './action-bar';
import { renderWithTheme, createMockProfile, mockDragState } from '@app/test/test-utils';

describe('ActionBar Component', () => {
  const mockProfile = createMockProfile();
  const mockOnLike = vi.fn();
  const mockOnDislike = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders like and dislike buttons', () => {
    renderWithTheme(
      <ActionBar 
        profile={mockProfile}
        onLike={mockOnLike}
        onDislike={mockOnDislike}
      />
    );
    
    expect(screen.getByLabelText(/dislike profile/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/like profile/i)).toBeInTheDocument();
  });

  it('handles like button click', async () => {
    const user = userEvent.setup();
    
    renderWithTheme(
      <ActionBar 
        profile={mockProfile}
        onLike={mockOnLike}
        onDislike={mockOnDislike}
      />
    );
    
    const likeButton = screen.getByLabelText(/like profile/i);
    await user.click(likeButton);
    
    expect(mockOnLike).toHaveBeenCalledWith(mockProfile.id);
    expect(mockOnDislike).not.toHaveBeenCalled();
  });

  it('handles dislike button click', async () => {
    const user = userEvent.setup();
    
    renderWithTheme(
      <ActionBar 
        profile={mockProfile}
        onLike={mockOnLike}
        onDislike={mockOnDislike}
      />
    );
    
    const dislikeButton = screen.getByLabelText(/dislike profile/i);
    await user.click(dislikeButton);
    
    expect(mockOnDislike).toHaveBeenCalledWith(mockProfile.id);
    expect(mockOnLike).not.toHaveBeenCalled();
  });

  it('responds to drag state changes', () => {
    const dragState = {
      ...mockDragState,
      isDragging: true,
      currentX: 100,
    };

    renderWithTheme(
      <ActionBar 
        profile={mockProfile}
        onLike={mockOnLike}
        onDislike={mockOnDislike}
        dragState={dragState}
      />
    );
    
    expect(screen.getByLabelText(/dislike profile/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/like profile/i)).toBeInTheDocument();
  });

  it('handles extreme left swipe state', () => {
    const dragState = {
      ...mockDragState,
      isDragging: true,
      currentX: -200,
    };

    renderWithTheme(
      <ActionBar 
        profile={mockProfile}
        onLike={mockOnLike}
        onDislike={mockOnDislike}
        dragState={dragState}
      />
    );
    
    expect(screen.getByLabelText(/dislike profile/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/like profile/i)).toBeInTheDocument();
  });

  it('handles extreme right swipe state', () => {
    const dragState = {
      ...mockDragState,
      isDragging: true,
      currentX: 200,
    };

    renderWithTheme(
      <ActionBar 
        profile={mockProfile}
        onLike={mockOnLike}
        onDislike={mockOnDislike}
        dragState={dragState}
      />
    );
    
    expect(screen.getByLabelText(/dislike profile/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/like profile/i)).toBeInTheDocument();
  });
});
