import {
  createStyles,
  makeStyles,
  useTheme,
  Theme,
} from '@material-ui/core/styles';

const styles = makeStyles(({ palette }: Theme) =>
  createStyles({
    loginImage: {
      width: '100%',
      height: '100vh',
      backgroundColor: palette.primary.main,
      backgroundImage: 'url("img/splash-screen.jpg")',
      backgroundPosition: 'center',
      backgroundSize: 'cover',
    },
  }),
);

const useGlobalStyles = () => styles(useTheme());

export default useGlobalStyles;
