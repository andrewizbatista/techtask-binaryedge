import {
  createStyles,
  makeStyles,
  useTheme,
  Theme,
} from '@material-ui/core/styles';

const styles = makeStyles(({ palette, spacing }: Theme) =>
  createStyles({
    loginImage: {
      width: '100%',
      height: '100vh',
      backgroundColor: palette.primary.main,
      backgroundImage: 'url("img/splash-screen.jpg")',
      backgroundPosition: 'center',
      backgroundSize: 'cover',
    },
    spacing2: {
      marginBottom: spacing(2),
    },
    spacing4: {
      marginBottom: spacing(4),
    },
    spacing6: {
      marginBottom: spacing(6),
    },
  }),
);

const useGlobalStyles = () => styles(useTheme());

export default useGlobalStyles;
