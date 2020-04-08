import React from 'react';

// Components
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

// Others
import useStyles from './styles';

export const Button = ({}: ButtonProps) => {
  const classes = useStyles();

  return (
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="center"
      className={classes.wrapper}
    >
      <Grid item xs={12}>
        <Typography variant="h6">
          Button
        </Typography>
      </Grid>
    </Grid>
  );
};

export interface ButtonProps {}

export default Button;
