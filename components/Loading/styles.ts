import {
  createStyles,
  makeStyles,
  useTheme,
  Theme,
} from '@material-ui/core/styles';

const styles = makeStyles(({}: Theme) =>
  createStyles({
    wrapper: {
      textAlign: 'center',
    },
    loading: {
      animation: '$spin 1.5s linear infinite',
      height: '50px',
    },
    error: {
      height: '50px',
    },
    tryAgain: {
      marginTop: '1rem',
    },
    '@keyframes spin': {
      '0%': { transform: 'rotate(360deg)' },
      '100%': { transform: 'rotate(0deg)' },
    },
  }),
);

const useStyles = () => styles(useTheme());

export default useStyles;
