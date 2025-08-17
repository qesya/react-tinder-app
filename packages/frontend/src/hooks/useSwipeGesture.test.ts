import { describe, it, expect, vi } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { useSwipeGesture } from './useSwipeGesture';

describe('useSwipeGesture Hook', () => {
  const mockSetDragState = vi.fn();
  const mockOnSwipeLeft = vi.fn();
  const mockOnSwipeRight = vi.fn();
  const mockOnSwipeCancel = vi.fn();

  const defaultProps = {
    dragState: {
      isDragging: false,
      startX: 0,
      currentX: 0,
      currentY: 0,
    },
    setDragState: mockSetDragState,
    onSwipeLeft: mockOnSwipeLeft,
    onSwipeRight: mockOnSwipeRight,
    onSwipeCancel: mockOnSwipeCancel,
  };

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('returns mouse and touch handlers', () => {
    const { result } = renderHook(() => useSwipeGesture(defaultProps));
    
    expect(result.current).toHaveProperty('handleMouseDown');
    expect(result.current).toHaveProperty('handleTouchStart');
    expect(typeof result.current.handleMouseDown).toBe('function');
    expect(typeof result.current.handleTouchStart).toBe('function');
  });

  it('does not start drag when disabled', () => {
    const { result } = renderHook(() => 
      useSwipeGesture({ ...defaultProps, disabled: true })
    );
    
    const mockEvent = {
      preventDefault: vi.fn(),
      clientX: 100,
      clientY: 100,
    } as any;
    
    act(() => {
      result.current.handleMouseDown(mockEvent);
    });
    
    expect(mockSetDragState).not.toHaveBeenCalled();
  });

  it('starts drag on mouse down when not disabled', () => {
    const { result } = renderHook(() => useSwipeGesture(defaultProps));
    
    const mockEvent = {
      preventDefault: vi.fn(),
      clientX: 100,
      clientY: 100,
    } as any;
    
    act(() => {
      result.current.handleMouseDown(mockEvent);
    });
    
    expect(mockEvent.preventDefault).toHaveBeenCalled();
    expect(mockSetDragState).toHaveBeenCalledWith({
      isDragging: true,
      startX: 100,
      currentX: 0,
      currentY: 0,
    });
  });

  it('starts drag on touch start', () => {
    const { result } = renderHook(() => useSwipeGesture(defaultProps));
    
    const mockEvent = {
      preventDefault: vi.fn(),
      touches: [{
        clientX: 150,
        clientY: 200,
      }],
    } as any;
    
    act(() => {
      result.current.handleTouchStart(mockEvent);
    });
    
    expect(mockEvent.preventDefault).toHaveBeenCalled();
    expect(mockSetDragState).toHaveBeenCalledWith({
      isDragging: true,
      startX: 150,
      currentX: 0,
      currentY: 0,
    });
  });

  it('respects custom swipe threshold', () => {
    const customThreshold = 200;
    const { result } = renderHook(() => 
      useSwipeGesture({ ...defaultProps, swipeThreshold: customThreshold })
    );
    
    expect(result.current).toHaveProperty('handleMouseDown');
    expect(result.current).toHaveProperty('handleTouchStart');
  });

  it('calls onSwipeStart when provided', () => {
    const mockOnSwipeStart = vi.fn();
    
    renderHook(() => 
      useSwipeGesture({ ...defaultProps, onSwipeStart: mockOnSwipeStart })
    );
    
    expect(mockOnSwipeStart).not.toHaveBeenCalled();
  });

  it('calls onSwipeEnd when provided', () => {
    const mockOnSwipeEnd = vi.fn();
    
    renderHook(() => 
      useSwipeGesture({ ...defaultProps, onSwipeEnd: mockOnSwipeEnd })
    );
    
    expect(mockOnSwipeEnd).not.toHaveBeenCalled(); 
  });
});
