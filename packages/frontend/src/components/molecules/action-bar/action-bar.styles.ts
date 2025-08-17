import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

export const ActionBarContainer = styled(Box)(() => ({
  display: 'flex',
  gap: 24,
  justifyContent: 'center',
  padding: 16
}));

export const ActionButton = styled('div')(() => ({
  width: 60,
  height: 60,
  borderRadius: '50%',
  minWidth: 60
}));
