import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

export const CardStackContainer = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  position: 'relative',
  height: '100vh',
  width: '100%',
  maxWidth: 400,
  margin: '0 auto',
  overflow: 'hidden'
}));

export const LoadingContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: theme.spacing(2),
  paddingTop: theme.spacing(8),
  paddingBottom: theme.spacing(8)
}));

export const EmptyStateContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: theme.spacing(2),
  paddingTop: theme.spacing(8),
  paddingBottom: theme.spacing(8),
  textAlign: 'center'
}));

export const CardContainer = styled(Box)<{ backgroundcolor?: string }>(({ backgroundcolor }) => ({
  position: 'relative',
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: backgroundcolor || 'transparent',
  transition: 'background-color 0.3s ease'
}));
