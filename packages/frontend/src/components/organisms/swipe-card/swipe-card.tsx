import { useEffect, useRef, useCallback } from 'react';
import { Box } from '@mui/material';

import { useSwipeGesture } from '@app/hooks';
import type { SwipeCardProps } from './swipe-card.types';
import { cardAnimations } from '@app/utils';
import { ProfileBadge } from '@app/components/molecules';

export const SwipeCard = ({ profile, onLike, onDislike, disabled = false, isVisible, setIsVisible, dragState, setDragState }: SwipeCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const swipeHandlers = useSwipeGesture({
    dragState,
    setDragState,
    onSwipeLeft: () => onDislike(profile.id),
    onSwipeRight: () => onLike(profile.id),
    onSwipeStart: () => setIsVisible(false),
    onSwipeCancel: () => {
      setIsVisible(false);
      setTimeout(() => {
        setIsVisible(true);
      }, 200);
    },
    disabled,
  });

  useEffect(() => {
    setIsVisible(false);
    setDragState({
      isDragging: false,
      startX: 0,
      currentX: 0,
      currentY: 0
    });

    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, [profile.id, setIsVisible, setDragState]);

  const handleKeyPress = useCallback((event: React.KeyboardEvent) => {
    if (disabled || dragState.isDragging) return;

    switch (event.key) {
      case 'ArrowLeft':
        onDislike(profile.id);
        break;
      case 'ArrowRight':
      case 'Enter':
        onLike(profile.id);
        break;
    }
  }, [disabled, dragState.isDragging, onLike, onDislike, profile.id]);

  return (
    <>
      <Box
        ref={cardRef}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 2,
          opacity: cardAnimations.getOpacity(dragState, isVisible),
          transform: cardAnimations.getTransform(dragState, isVisible),
          transition: dragState.isDragging ? 'none' : 'all 0.25s ease-out',
          cursor: dragState.isDragging ? 'grabbing' : 'grab',
          userSelect: 'none',
          position: 'relative',
          willChange: 'transform, opacity',
          touchAction: 'none',
          zIndex: 1
        }}
        onMouseDown={swipeHandlers.handleMouseDown}
        onTouchStart={swipeHandlers.handleTouchStart}
        onKeyDown={handleKeyPress}
        tabIndex={0}
        role="region"
        aria-label={`Profile of ${profile.name}, ${profile.age} years old. Drag or use arrow keys to like/dislike`}
      >
        <ProfileBadge profile={profile} />
      </Box>
    </>
  );
};
