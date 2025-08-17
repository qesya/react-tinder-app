import { useCallback, useEffect } from 'react';

import type { DragState } from '@app/types';

interface UseSwipeGestureProps {
  dragState: DragState;
  setDragState: (state: DragState) => void;
  disabled?: boolean;
  onSwipeLeft: () => void;
  onSwipeRight: () => void;
  onSwipeCancel: () => void;
  swipeThreshold?: number;
  onSwipeStart?: () => void;
  onSwipeEnd?: () => void;
}

export const useSwipeGesture = ({
  dragState,
  setDragState,
  disabled = false,
  onSwipeLeft,
  onSwipeRight,
  onSwipeCancel,
  swipeThreshold = 150,
  onSwipeStart,
  onSwipeEnd
}: UseSwipeGestureProps) => {

  const handleStart = useCallback((clientX: number, _clientY: number) => {
    if (disabled) return;
    setDragState({
      isDragging: true,
      startX: clientX,
      currentX: 0,
      currentY: 0
    });
  }, [disabled, setDragState]);

  const handleMove = useCallback((clientX: number, clientY: number) => {
    if (!dragState.isDragging || disabled) return;

    const deltaX = clientX - dragState.startX;
    const deltaY = Math.min(0, (clientY - dragState.startX) * 0.05);

    setDragState({
      isDragging: true,
      startX: dragState.startX,
      currentX: deltaX,
      currentY: deltaY
    });
  }, [dragState.isDragging, dragState.startX, disabled, setDragState]);

  const handleEnd = useCallback(() => {
    if (!dragState.isDragging) return;

    const { currentX } = dragState;
    const shouldSwipe = Math.abs(currentX) > swipeThreshold;

    if (shouldSwipe) {
      onSwipeStart?.();
      const direction = currentX > 0 ? 'right' : 'left';
      const exitX = direction === 'right' ? 400 : -400;

      setDragState({
        ...dragState,
        isDragging: false,
        currentX: exitX,
        currentY: -100
      });

      setTimeout(() => {
        if (currentX > 0) {
          onSwipeRight();
        } else {
          onSwipeLeft();
        }
        onSwipeEnd?.();
      }, 300);
    } else {
      setDragState({
        ...dragState,
        isDragging: false,
        currentX: 0,
        currentY: 0
      });
      onSwipeCancel();
    }
  }, [dragState, onSwipeLeft, onSwipeRight, onSwipeCancel, swipeThreshold, onSwipeStart, onSwipeEnd, setDragState]);

  const handleMouseDown = useCallback((event: React.MouseEvent) => {
    event.preventDefault();
    handleStart(event.clientX, event.clientY);
  }, [handleStart]);

  const handleTouchStart = useCallback((event: React.TouchEvent) => {
    event.preventDefault();
    const touch = event.touches[0];
    handleStart(touch.clientX, touch.clientY);
  }, [handleStart]);

  useEffect(() => {
    if (!dragState.isDragging) return;

    const handleMouseMove = (event: MouseEvent) => {
      handleMove(event.clientX, event.clientY);
    };

    const handleTouchMove = (event: TouchEvent) => {
      event.preventDefault();
      const touch = event.touches[0];
      handleMove(touch.clientX, touch.clientY);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleEnd);
    document.addEventListener('touchmove', handleTouchMove, { passive: false });
    document.addEventListener('touchend', handleEnd);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleEnd);
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', handleEnd);
    };
  }, [dragState.isDragging, handleMove, handleEnd]);

  return {
    handleMouseDown,
    handleTouchStart
  };
};
