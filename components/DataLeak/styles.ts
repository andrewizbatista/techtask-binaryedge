import {
  createStyles,
  makeStyles,
  useTheme,
  Theme,
} from '@material-ui/core/styles';

const styles = makeStyles(({}: Theme) =>
  createStyles({
    dataLeakName: {
      paddingLeft: '1rem',
      marginTop: 'auto',
      marginBottom: 'auto',
    },
    seenChip: {
      marginLeft: 'auto',
      marginTop: 'auto',
      marginBottom: 'auto',
      transition: 'opacity 0.2s ease-out',
      opacity: 0,
    },
    expansionDetails: {
      display: 'block',
    },
  }),
);

const useStyles = () => styles(useTheme());

export default useStyles;
