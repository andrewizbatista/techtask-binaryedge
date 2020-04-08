import {
  createStyles,
  makeStyles,
  useTheme,
  Theme,
} from '@material-ui/core/styles';

const styles = makeStyles(({ palette, spacing }: Theme) =>
  createStyles({
    header: {
      borderBottom: `5px solid ${palette.primary.main}`,
      backgroundColor: palette.primary.main,
      // backgroundImage: 'url("img/splash-screen.jpg")',
      backgroundImage:
        'linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.4)), url("img/splash-screen.jpg")',
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      color: '#fff !important',

      paddingTop: spacing(2),
      marginBottom: spacing(4),
      '& img': {
        height: '80px',
      },
    },
    logout: {
      float: 'right',
    },
  }),
);

const useStyles = () => styles(useTheme());

export default useStyles;
