import { useCallback, useEffect, useState } from 'react';
import { Box, CircularProgress, useTheme } from '@mui/material';

import { colorHelpers } from '@app/theme/colors';
import { useActionsStore, useProfilesStore } from '@app/state';
import { Text } from '@app/components/atoms';
import { ActionBar } from '@app/components/molecules';
import { SwipeCard } from '../swipe-card';

export const CardStack = () => {
  const theme = useTheme();
  const [isVisible, setIsVisible] = useState(false);
  const [dragState, setDragState] = useState({
    isDragging: false,
    startX: 0,
    currentX: 0,
    currentY: 0
  });

  const { queue, isLoading, fetchMore, popNext } = useProfilesStore();
  const { like, dislike } = useActionsStore();

  useEffect(() => {
    if (queue.length === 0 && !isLoading) {
      fetchMore();
    }
  }, [fetchMore, queue.length, isLoading]);


  const handleCardExit = useCallback(() => {
    setIsVisible(false);
    setDragState({
      isDragging: false,
      startX: 0,
      currentX: 0,
      currentY: 0
    });
    setTimeout(() => {
      popNext();
    }, 300);
  }, [popNext]);

  const handleLike = useCallback((id: string) => {
    like(id);
    handleCardExit();
  }, [like, handleCardExit]);

  const handleDislike = useCallback((id: string) => {
    dislike(id);
    handleCardExit();
  }, [dislike, handleCardExit]);

  const getBackgroundColor = useCallback(() => {
    if (!dragState.isDragging || Math.abs(dragState.currentX) < 30) {
      return 'transparent';
    }

    const { currentX } = dragState;
    const intensity = Math.min(Math.abs(currentX) / 200, 0.8);

    const color = currentX > 0
      ? theme.customColors.semantic.success.main
      : theme.customColors.semantic.error.main;

    return colorHelpers.rgba(color, intensity);
  }, [dragState.isDragging, dragState.currentX, theme]);

  const renderLoadingState = () => (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 2,
        py: 8
      }}
    >
      <CircularProgress />
      <Text variant="body1">Loading profiles...</Text>
    </Box>
  );

  const renderEmptyState = () => (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 2,
        py: 8,
        textAlign: 'center'
      }}
    >
      <Text variant="h2" sx={{ mb: 2 }}>
        No more profiles! 🎯
      </Text>
      <Text variant="body1" sx={{ color: 'text.secondary' }}>
        Check back later for more potential matches.
      </Text>
    </Box>
  );

  if (isLoading && queue.length === 0) return renderLoadingState();
  if (queue.length === 0) return renderEmptyState();

  const currentProfile = queue[0];

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        minHeight: '70vh',
        position: 'relative',
        backgroundColor: getBackgroundColor(),
      }}
    >
      <SwipeCard
        profile={currentProfile}
        onLike={handleLike}
        onDislike={handleDislike}
        isVisible={isVisible}
        setIsVisible={setIsVisible}
        dragState={dragState}
        setDragState={setDragState}
      />
      <ActionBar
        profile={currentProfile}
        onLike={handleLike}
        onDislike={handleDislike}
        dragState={dragState}
      />
    </Box>
  );
};
