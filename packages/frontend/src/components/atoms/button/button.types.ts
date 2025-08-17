import type { ButtonProps as MuiButtonProps } from '@mui/material';

export interface ButtonProps extends Omit<MuiButtonProps, 'variant'> {
  variant?: 'like' | 'dislike' | 'okay' | 'primary' | 'secondary';
}