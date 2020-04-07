import React from 'react';

// Components
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

export const SubmitButtons = ({
  canSubmit,
  canReset,
  resetForm,
}: SubmitButtonsProps) => {
  return (
    <>
      <Grid item>
        <Button
          type="button"
          variant="contained"
          size="small"
          color="default"
          onClick={() => resetForm()}
          disabled={!canReset}
        >
          Reset
        </Button>
      </Grid>
      <Grid item>
        <Button
          type="submit"
          variant="contained"
          size="small"
          color="primary"
          disabled={!canSubmit}
        >
          Enter
        </Button>
      </Grid>
    </>
  );
};

export interface SubmitButtonsProps {
  canSubmit: boolean;
  canReset: boolean;
  resetForm: () => void;
}

export default SubmitButtons;
