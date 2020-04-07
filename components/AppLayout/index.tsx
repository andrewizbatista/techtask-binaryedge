import React, { useCallback } from 'react';
import { useRouter } from 'next/router';

// Components
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import DynamicMetaTags from 'components/MetaTags/Dynamic';

// Others
import useStyles from './styles';

export const AppLayout = ({ pageMeta, children }: AppLayoutProps) => {
  const classes = useStyles();
  const router = useRouter();

  const logout = useCallback(() => {
    localStorage.removeItem('authToken');
    router.push('/login');
  }, []);

  return (
    <>
      <DynamicMetaTags pageMeta={pageMeta} />
      <Grid container direction="row" justify="center" alignItems="center">
        <Grid item xs={12} className={classes.header}>
          <Grid container direction="row" justify="center" alignItems="center">
            <Grid item xs={8}>
              <img
                src="https://www.binaryedge.io/img/logo.png"
                title="BinaryEdge"
                alt="BinaryEdge"
              />
              <Typography variant="h1" color="secondary">
                Tech Task
              </Typography>
              <Typography variant="body1" color="secondary">
                Created by{' '}
                <Link
                  href="https://github.com/andrewizbatista"
                  title="@andrewizbatista on GitHub"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @andrewizbatista
                </Link>
                <Button
                  color="secondary"
                  className={classes.logout}
                  onClick={logout}
                >
                  Logout
                </Button>
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={8}>
          {children}
        </Grid>
      </Grid>
    </>
  );
};

export interface AppLayoutProps {
  pageMeta: PageMeta;
  children: any;
}

export default AppLayout;
