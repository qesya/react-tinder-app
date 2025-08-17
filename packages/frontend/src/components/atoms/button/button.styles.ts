import { Button as MuiButton } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledButton = styled(MuiButton)<{ customvariant?: string }>(({ theme, customvariant }) => {
  const customColors = theme.customColors;
  
  return {
    borderRadius: '50px',
    textTransform: 'none',
    fontWeight: 600,
    padding: '12px 24px',
    
    ...(customvariant === 'like' && {
      backgroundColor: customColors.semantic.success.main,
      color: 'white',
      '&:hover': {
        backgroundColor: customColors.primary.dark
      },
      '&:disabled': {
        backgroundColor: customColors.primary.light,
        color: customColors.primary.main
      }
    }),
    
    ...(customvariant === 'dislike' && {
      backgroundColor: customColors.semantic.error.main,
      color: 'white',
      '&:hover': {
        backgroundColor: customColors.secondary.dark
      },
      '&:disabled': {
        backgroundColor: customColors.secondary.light,
        color: customColors.secondary.main
      }
    }),
    
    ...(customvariant === 'okay' && {
      backgroundColor: customColors.primary.main,
      color: 'white',
      '&:hover': {
        backgroundColor: customColors.primary.dark
      }
    }),
    
    ...(customvariant === 'primary' && {
      backgroundColor: theme.palette.primary.main,
      color: 'white',
      '&:hover': {
        backgroundColor: theme.palette.primary.dark
      }
    }),
    
    ...(customvariant === 'secondary' && {
      backgroundColor: 'transparent',
      color: theme.palette.text.primary,
      border: `1px solid ${theme.palette.divider}`,
      '&:hover': {
        backgroundColor: theme.palette.action.hover
      }
    })
  };
});
