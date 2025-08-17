import { Avatar as MuiAvatar } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledAvatar = styled(MuiAvatar)<{ customsize?: string }>(({ customsize }) => ({
  ...(customsize === 'small' && {
    width: 40,
    height: 40
  }),
  ...(customsize === 'medium' && {
    width: 60,
    height: 60
  }),
  ...(customsize === 'large' && {
    width: 300,
    height: 400,
    borderRadius: '16px'
  })
}));
