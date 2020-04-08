import React from 'react';

// Components
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import LoopIcon from '@material-ui/icons/Loop';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';

// Others
import useStyles from './styles';

export const Loading = ({
  isLoading,
  hasError,
  errorMessage,
  reset,
  children,
}: LoadingProps) => {
  const classes = useStyles();

  const handleReset = () => reset();

  if (hasError) {
    return (
      <div className={classes.wrapper}>
        <ErrorOutlineIcon color="error" className={classes.error} />
        <Typography color="error" variant="body2">
          {errorMessage || 'Something went wrong.'}
        </Typography>
        <Button
          variant="outlined"
          color="secondary"
          size="small"
          onClick={handleReset}
          className={classes.tryAgain}
        >
          Try Again
        </Button>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className={classes.wrapper}>
        <LoopIcon color="secondary" className={classes.loading} />
        <Typography color="secondary" variant="body2">
          Loading...
        </Typography>
      </div>
    );
  }

  return children;
};

export interface LoadingProps {
  isLoading: boolean;
  hasError: boolean;
  reset: () => any;
  errorMessage?: string;
  children: any;
}

export default Loading;
