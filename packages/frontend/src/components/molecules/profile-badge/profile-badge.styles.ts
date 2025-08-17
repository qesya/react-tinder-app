import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

export const ProfileCard = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  borderRadius: theme.spacing(1),
  overflow: 'hidden',
  width: 320,
  height: 560,
  position: 'relative',
  backdropFilter: 'blur(10px)',
  border: `1px solid ${theme.customColors.glass.border.medium}`,
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  '&:hover': {
    transform: 'translateY(-8px) scale(1.02)',
    boxShadow: `
      0 16px 48px ${theme.customColors.glass.dark.light},
      0 4px 12px ${theme.customColors.glass.dark.light},
      inset 0 1px 0 ${theme.customColors.glass.border.heavy}
    `,
  }
}));

export const BackgroundImage = styled(Box)<{ imageUrl?: string }>(({ theme, imageUrl }) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundImage: imageUrl ? `url(${imageUrl})` : 'none',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  '&::after': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: theme.gradients.overlay
  }
}));

export const PhotoCounter = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: 15,
  left: 15,
  backgroundColor: theme.customColors.glass.dark.heavy,
  backdropFilter: 'blur(4px)',
  borderRadius: '12px',
  padding: '4px 8px',
  border: `1px solid ${theme.customColors.glass.border.medium}`,
  zIndex: 3
}));

export const PhotoCounterContent = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center',
  gap: 4
}));

export const ContentOverlay = styled(Box)(({ theme }) => ({
  position: 'absolute',
  bottom: 0,
  left: 0,
  right: 0,
  padding: theme.spacing(1),
  paddingTop: theme.spacing(2),
  background: theme.gradients.contentOverlay,
  backdropFilter: 'blur(8px)',
  textAlign: 'center',
  zIndex: 2
}));

export const ProfileInfo = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(2)
}));

export const LocationContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginTop: theme.spacing(0.5),
  gap: theme.spacing(0.5)
}));

export const BioContainer = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(2)
}));

export const InterestsContainer = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(1)
}));

export const InterestsList = styled(Box)(() => ({
  display: 'flex',
  flexWrap: 'wrap',
  gap: 4,
  justifyContent: 'center',
  maxHeight: '60px',
  overflow: 'hidden'
}));

export const InterestTag = styled(Box)(({ theme }) => ({
  backgroundColor: theme.customColors.glass.overlay.medium,
  backdropFilter: 'blur(4px)',
  borderRadius: '12px',
  padding: '4px 8px',
  border: `1px solid ${theme.customColors.glass.border.heavy}`
}));

export const InterestCountTag = styled(Box)(({ theme }) => ({
  backgroundColor: theme.customColors.glass.overlay.light,
  backdropFilter: 'blur(4px)',
  borderRadius: '12px',
  padding: '4px 8px',
  border: `1px solid ${theme.customColors.glass.border.light}`
}));
