import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#0B1F3A',
      light: '#1A3A6B',
      dark: '#060D1F',
      contrastText: '#fff',
    },
    secondary: {
      main: '#00C853',
      light: '#5EFC82',
      dark: '#009624',
      contrastText: '#fff',
    },
    background: {
      default: '#F8FAFC',
      paper: '#FFFFFF',
    },
    text: {
      primary: '#0B1F3A',
      secondary: '#5A6A7E',
    },
    success: { main: '#00C853' },
    error: { main: '#FF1744' },
    warning: { main: '#FFC107' },
    info: { main: '#2196F3' },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", sans-serif',
    h1: { fontWeight: 800, lineHeight: 1.1 },
    h2: { fontWeight: 700, lineHeight: 1.2 },
    h3: { fontWeight: 700, lineHeight: 1.3 },
    h4: { fontWeight: 600 },
    h5: { fontWeight: 600 },
    h6: { fontWeight: 600 },
    body1: { lineHeight: 1.7 },
    button: { textTransform: 'none', fontWeight: 600 },
  },
  shape: { borderRadius: 12 },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          padding: '10px 24px',
          fontSize: '0.95rem',
          fontWeight: 600,
          boxShadow: 'none',
          '&:hover': { boxShadow: '0 4px 20px rgba(0,0,0,0.15)' },
        },
        containedPrimary: {
          background: 'linear-gradient(135deg, #0B1F3A 0%, #1A3A6B 100%)',
        },
        containedSecondary: {
          background: 'linear-gradient(135deg, #00C853 0%, #009624 100%)',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          boxShadow: '0 2px 20px rgba(11,31,58,0.08)',
          border: '1px solid rgba(11,31,58,0.06)',
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: { borderRadius: 6, fontWeight: 600 },
      },
    },
  },
})

export default theme
