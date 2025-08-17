import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline, Box } from '@mui/material';
import { CardStack, MatchModal } from './components';
import { useActionsStore } from './state';
import { theme } from './theme';

function App() {
  const { matchOpen, closeMatch } = useActionsStore();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box>
        <Box
          sx={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: (theme) => theme.gradients.background,
            backgroundSize: '400% 400%',
            maxWidth: '100vw',
            animation: 'gradientShift 15s ease infinite',
            '@keyframes gradientShift': {
              '0%': { backgroundPosition: '0% 50%' },
              '50%': { backgroundPosition: '100% 50%' },
              '100%': { backgroundPosition: '0% 50%' }
            }
          }}
        >
          <Box sx={{ height: '100vh', width: '100vw', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
            <CardStack />
          </Box>
        </Box>

        <MatchModal open={matchOpen} onClose={closeMatch} />
      </Box>
    </ThemeProvider>
  );
}

export default App;
