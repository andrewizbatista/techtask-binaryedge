import { createMuiTheme } from '@material-ui/core/styles';

const muiTheme = createMuiTheme();

export const colors: {
  Primary: string;
  Secondary: string;
  Dark: string;
  Light: string;
  LightDarker: string;
  Error: string;
} = {
  Primary: '#e64d36',
  Secondary: '#1d3557',
  Dark: '#1e1e1e',
  Light: '#e2e2e2',
  LightDarker: '#a1a1a1',
  Error: '#e64d36',
};

export const theme = createMuiTheme({
  palette: {
    type: 'light',
    background: {
      default: '#fff',
    },
    primary: {
      main: colors.Primary,
    },
    secondary: {
      main: colors.Secondary,
    },
    error: {
      main: colors.Error,
    },
    text: {
      primary: colors.Dark,
      secondary: colors.LightDarker,
    },
  },
  typography: {
    fontFamily: ['Hind', 'monospace'].join(','),
    h1: {
      fontSize: '2.5rem',
      fontWeight: 'bold',
      textTransform: 'uppercase',
      letterSpacing: '1px',
    },
    h2: {
      fontSize: '1.4rem',
      fontWeight: 'bold',
    },
    h3: {
      fontSize: '0.9rem',
    },
    subtitle2: {
      fontFamily: ['monospace'].join(','),
      fontSize: '1rem',
    },
    body2: {
      fontFamily: ['monospace'].join(','),
      fontSize: '0.8rem',
    },
  },
  overrides: {},
  props: {},
});
