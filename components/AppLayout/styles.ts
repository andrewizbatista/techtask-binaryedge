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
      backgroundImage: 'url("img/splash-screen.jpg")',
      backgroundPosition: 'center',
      backgroundSize: 'cover',
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
