import { useTheme } from '@mui/material';
import { Button, Text } from '@app/components/atoms';
import type { MatchModalProps } from './match-modal.types';
import { ModalBackdrop, ModalContainer, ModalContent } from './match-modal.styles';

export const MatchModal = ({ open, onClose }: MatchModalProps) => {
  const theme = useTheme();
  const handleKeyPress = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      onClose();
    }
  };

  if (!open) return null;

  return (
    <ModalBackdrop
      onClick={onClose}
      onKeyDown={handleKeyPress}
      tabIndex={0}
    >
      <ModalContainer onClick={(e) => e.stopPropagation()}>
        <ModalContent>
          <Text
            variant="h1"
            sx={{
              fontSize: '4rem',
              mb: 2,
              background: theme.gradients.like,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            🎉
          </Text>
          <Text
            id="match-dialog-title"
            variant="h2"
            sx={{
              fontWeight: 'bold',
              color: 'primary.main',
              mb: 1
            }}
          >
            You got a match!
          </Text>
          <Text variant="body1" sx={{ color: 'text.secondary', mb: 2 }}>
            Someone likes you back!
          </Text>
          <Button
            variant="okay"
            onClick={onClose}
            size="large"
            autoFocus
          >
            Okay
          </Button>
        </ModalContent>
      </ModalContainer>
    </ModalBackdrop>
  );
};
