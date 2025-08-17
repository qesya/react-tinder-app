import { Close, Favorite } from '@mui/icons-material';

import { Button } from '@app/components/atoms';
import type { ActionBarProps } from './action-bar.types';
import { ActionBarContainer } from './action-bar.styles';

export const ActionBar = ({ profile, onLike, onDislike, dragState }: ActionBarProps) => {

  const getButtonSize = (isDislike: boolean) => {
    if (!dragState?.isDragging) {
      return { width: 60, height: 60, minWidth: 60 };
    }

    const { currentX } = dragState;
    const dragDistance = Math.abs(currentX);
    const isSwipingInDirection = isDislike ? currentX < 0 : currentX > 0;
    
    if (dragDistance < 30) {
      return { width: 60, height: 60, minWidth: 60 };
    }

    if (isSwipingInDirection) {
      const scale = Math.min(1 + (dragDistance / 300), 1.5);
      const size = 60 * scale;
      return { width: size, height: size, minWidth: size };
    } else {
      const scale = Math.max(1 - (dragDistance / 400), 0.7);
      const size = 60 * scale;
      return { width: size, height: size, minWidth: size };
    }
  };

  return (
    <ActionBarContainer>
      <Button
        variant="dislike"
        onClick={() => onDislike(profile.id)}
        size="large"
        sx={{
          ...getButtonSize(true),
          borderRadius: '50%',
          transition: dragState?.isDragging ? 'none' : 'all 0.3s ease'
        }}
        aria-label="Dislike profile"
      >
        <Close sx={{ fontSize: '1.5rem' }} />
      </Button>
      <Button
        variant="like"
        onClick={() => onLike(profile.id)}
        size="large"
        sx={{
          ...getButtonSize(false),
          borderRadius: '50%',
          transition: dragState?.isDragging ? 'none' : 'all 0.3s ease'
        }}
        aria-label="Like profile"
      >
        <Favorite sx={{ fontSize: '1.5rem' }} />
      </Button>
    </ActionBarContainer>
  );
};
