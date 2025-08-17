import type { TypographyProps } from '@mui/material';

export interface TextProps extends Omit<TypographyProps, 'variant'> {
  variant?: 'h1' | 'h2' | 'h3' | 'body1' | 'body2' | 'caption';
}