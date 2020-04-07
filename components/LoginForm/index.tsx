import React, { useCallback } from 'react';
import { Formik, FormikProps, FormikHelpers, Form } from 'formik';
import { useRouter } from 'next/router';

// Components
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import InputField from 'components/InputField';

// Utils
import { formValuesSchema, FormValues } from './formSchema';
import useStyles from './styles';

const FORM_NAME = 'LoginForm';

export const LoginForm = ({}: LoginFormProps) => {
  const classes = useStyles();
  const router = useRouter();

  /**
   * Initial Values
   */
  const initialValues: FormValues = {
    email: '',
    password: '',
  };

  /**
   * Submit
   */
  const handleSubmit = useCallback(
    (values, { setSubmitting, resetForm }: FormikHelpers<FormValues>) => {
      console.log(FORM_NAME, values);

      setSubmitting(false);
      resetForm();

      router.push('/data-leaks');
    },
    [],
  );

  return (
    <Formik
      onSubmit={handleSubmit}
      initialValues={initialValues}
      validationSchema={formValuesSchema}
      enableReinitialize
    >
      {({
        values,
        errors,
        touched,
        handleBlur,
        handleChange,
        dirty,
        isValid,
        isSubmitting,
        isValidating,
        resetForm,
      }: FormikProps<FormValues>) => {
        const canSubmit = isValid && dirty && !isSubmitting && !isValidating;
        const canReset = dirty && !isSubmitting && !isValidating;

        return (
          <Form id={`${FORM_NAME}-Form`} noValidate className={classes.wrapper}>
            <Grid
              container
              direction="row"
              justify="flex-start"
              alignItems="flex-start"
            >
              <Grid item xs={12}>
                <InputField
                  type="text"
                  name="email"
                  label="Email"
                  value={values.email}
                  error={errors.email}
                  touch={touched.email}
                  handleBlur={handleBlur}
                  handleChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <InputField
                  type="password"
                  name="password"
                  label="Password"
                  value={values.password}
                  error={errors.password}
                  touch={touched.password}
                  handleBlur={handleBlur}
                  handleChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <Grid
                  container
                  justify="flex-end"
                  alignItems="flex-end"
                  spacing={1}
                >
                  <Grid item>
                    <Button
                      type="button"
                      variant="contained"
                      color="default"
                      size="small"
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
                      color="primary"
                      size="small"
                      disabled={!canSubmit}
                    >
                      Enter
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Form>
        );
      }}
    </Formik>
  );
};

export interface LoginFormProps {}

export default LoginForm;
