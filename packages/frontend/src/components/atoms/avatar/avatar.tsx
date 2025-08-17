
import { Person } from '@mui/icons-material';

import type { AvatarProps } from './avatar.types';
import { StyledAvatar } from './avatar.styles';

export const Avatar = ({ src, alt, size = 'medium' }: AvatarProps) => {
  return (
    <StyledAvatar
      src={src}
      alt={alt}
      customsize={size}
    >
      {!src && <Person />}
    </StyledAvatar>
  );
};
