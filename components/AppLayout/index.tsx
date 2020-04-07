import React from 'react';

// Components
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import DynamicMetaTags from 'components/MetaTags/Dynamic';

// Others
import useStyles from './styles';

export const AppLayout = ({ pageMeta, children }: AppLayoutProps) => {
  const classes = useStyles();

  return (
    <>
      <DynamicMetaTags pageMeta={pageMeta} />
      <Grid container direction="row" justify="center" alignItems="center">
        <Grid item xs={10}>
          {/* <img
            src="https://www.binaryedge.io/img/logo.png"
            title="BinaryEdge"
            alt="BinaryEdge"

          /> */}
          <Typography variant="h1" color="secondary">
            Tech Task
          </Typography>
        </Grid>
        <Grid item xs={10}>
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
