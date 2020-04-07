import React, { ChangeEvent, FocusEvent } from 'react';

// Components
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import TextField from '@material-ui/core/TextField';

// Others
import useStyles from './styles';

export const InputField = ({
  type,
  name,
  label,
  value,
  error,
  touch,
  isDisabled,
  isHidden,
  handleBlur,
  handleChange,
}: InputFieldProps) => {
  const classes = useStyles();

  return (
    <FormControl
      fullWidth
      error={!!error}
      style={{ visibility: isHidden ? 'hidden' : 'visible' }}
    >
      <TextField
        type={type}
        name={name}
        label={label}
        value={value}
        onBlur={handleBlur}
        onChange={handleChange}
        disabled={isDisabled}
        variant="outlined"
        color="secondary"
      />
      <FormHelperText>{error && touch ? error : ' '}</FormHelperText>
    </FormControl>
  );
};

export interface InputFieldProps {
  name: string;
  label: string;
  value: string;
  type: string;
  /**
   * Formik "error"
   */
  error: string | undefined;
  /**
   * Formik "touch"
   */
  touch: boolean | undefined;

  /**
   * Formik "handleBlur" function
   */
  handleBlur: (e: FocusEvent<any>) => void;
  /**
   * Formik "handleChange" function
   */
  handleChange: (e: ChangeEvent<any>) => void;

  isDisabled?: boolean;
  isHidden?: boolean;
}

export default InputField;
