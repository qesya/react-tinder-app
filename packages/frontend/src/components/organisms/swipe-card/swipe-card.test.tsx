import { describe, it, expect, vi } from 'vitest';
import { screen, fireEvent } from '@testing-library/react';
import { SwipeCard } from './swipe-card';
import { renderWithTheme, createMockProfile, mockDragState } from '@app/test/test-utils';

describe('SwipeCard Component', () => {
  const mockProfile = createMockProfile();
  const mockOnLike = vi.fn();
  const mockOnDislike = vi.fn();
  const mockSetIsVisible = vi.fn();
  const mockSetDragState = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders profile information', () => {
    renderWithTheme(
      <SwipeCard
        profile={mockProfile}
        onLike={mockOnLike}
        onDislike={mockOnDislike}
        isVisible={true}
        setIsVisible={mockSetIsVisible}
        dragState={mockDragState}
        setDragState={mockSetDragState}
      />
    );
    
    expect(screen.getByText(mockProfile.name)).toBeInTheDocument();
    expect(screen.getByText(mockProfile.age.toString())).toBeInTheDocument();
  });

  it('handles keyboard navigation - left arrow for dislike', () => {
    renderWithTheme(
      <SwipeCard
        profile={mockProfile}
        onLike={mockOnLike}
        onDislike={mockOnDislike}
        isVisible={true}
        setIsVisible={mockSetIsVisible}
        dragState={mockDragState}
        setDragState={mockSetDragState}
      />
    );
    
    const card = screen.getByRole('region');
    fireEvent.keyDown(card, { key: 'ArrowLeft' });
    
    expect(mockOnDislike).toHaveBeenCalledWith(mockProfile.id);
  });

  it('handles keyboard navigation - right arrow for like', () => {
    renderWithTheme(
      <SwipeCard
        profile={mockProfile}
        onLike={mockOnLike}
        onDislike={mockOnDislike}
        isVisible={true}
        setIsVisible={mockSetIsVisible}
        dragState={mockDragState}
        setDragState={mockSetDragState}
      />
    );
    
    const card = screen.getByRole('region');
    fireEvent.keyDown(card, { key: 'ArrowRight' });
    
    expect(mockOnLike).toHaveBeenCalledWith(mockProfile.id);
  });

  it('handles keyboard navigation - enter for like', () => {
    renderWithTheme(
      <SwipeCard
        profile={mockProfile}
        onLike={mockOnLike}
        onDislike={mockOnDislike}
        isVisible={true}
        setIsVisible={mockSetIsVisible}
        dragState={mockDragState}
        setDragState={mockSetDragState}
      />
    );
    
    const card = screen.getByRole('region');
    fireEvent.keyDown(card, { key: 'Enter' });
    
    expect(mockOnLike).toHaveBeenCalledWith(mockProfile.id);
  });

  it('does not respond to keyboard when disabled', () => {
    renderWithTheme(
      <SwipeCard
        profile={mockProfile}
        onLike={mockOnLike}
        onDislike={mockOnDislike}
        disabled={true}
        isVisible={true}
        setIsVisible={mockSetIsVisible}
        dragState={mockDragState}
        setDragState={mockSetDragState}
      />
    );
    
    const card = screen.getByRole('region');
    fireEvent.keyDown(card, { key: 'ArrowLeft' });
    fireEvent.keyDown(card, { key: 'ArrowRight' });
    
    expect(mockOnLike).not.toHaveBeenCalled();
    expect(mockOnDislike).not.toHaveBeenCalled();
  });

  it('does not respond to keyboard when dragging', () => {
    const draggingState = { ...mockDragState, isDragging: true };
    
    renderWithTheme(
      <SwipeCard
        profile={mockProfile}
        onLike={mockOnLike}
        onDislike={mockOnDislike}
        isVisible={true}
        setIsVisible={mockSetIsVisible}
        dragState={draggingState}
        setDragState={mockSetDragState}
      />
    );
    
    const card = screen.getByRole('region');
    fireEvent.keyDown(card, { key: 'ArrowLeft' });
    
    expect(mockOnDislike).not.toHaveBeenCalled();
  });

  it('has proper accessibility attributes', () => {
    renderWithTheme(
      <SwipeCard
        profile={mockProfile}
        onLike={mockOnLike}
        onDislike={mockOnDislike}
        isVisible={true}
        setIsVisible={mockSetIsVisible}
        dragState={mockDragState}
        setDragState={mockSetDragState}
      />
    );
    
    const card = screen.getByRole('region');
    expect(card).toHaveAttribute('tabIndex', '0');
    expect(card).toHaveAttribute('aria-label');
  });

  it('handles mouse interactions', () => {
    renderWithTheme(
      <SwipeCard
        profile={mockProfile}
        onLike={mockOnLike}
        onDislike={mockOnDislike}
        isVisible={true}
        setIsVisible={mockSetIsVisible}
        dragState={mockDragState}
        setDragState={mockSetDragState}
      />
    );
    
    const card = screen.getByRole('region');
    fireEvent.mouseDown(card, { clientX: 100, clientY: 100 });
    
    expect(mockSetDragState).toHaveBeenCalled();
  });
});
