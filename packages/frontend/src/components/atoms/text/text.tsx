import { Typography } from '@mui/material';
import type { TextProps } from './text.types';

export const Text = ({ variant = 'body1', children, ...props }: TextProps) => {
  return (
    <Typography variant={variant} {...props}>
      {children}
    </Typography>
  );
};
