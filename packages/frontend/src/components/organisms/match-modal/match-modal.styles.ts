import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

export const ModalBackdrop = styled(Box)(() => ({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.9)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 9999,
  backdropFilter: 'blur(10px)',
}));

export const ModalContainer = styled(Box)(() => ({
  backgroundColor: 'white',
  borderRadius: 16,
  maxWidth: 500,
  width: '90%',
  maxHeight: '80%',
  overflow: 'auto',
  position: 'relative',
  boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)',
}));

export const ModalContent = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: theme.spacing(3),
  paddingTop: theme.spacing(4),
  paddingBottom: theme.spacing(4),
  paddingLeft: theme.spacing(4),
  paddingRight: theme.spacing(4),
  textAlign: 'center'
}));
