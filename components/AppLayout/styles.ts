import {
  createStyles,
  makeStyles,
  useTheme,
  Theme,
} from '@material-ui/core/styles';

const styles = makeStyles(({}: Theme) =>
  createStyles({
    appbar: {
      height: '10vh',
      backgroundColor: 'green',
    },
    content: {
      height: '90vh',
    },
  }),
);

const useStyles = () => styles(useTheme());

export default useStyles;
