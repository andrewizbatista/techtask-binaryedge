import React, { useCallback } from 'react';
import { Formik, FormikProps, FormikHelpers, Form } from 'formik';
import { useRouter } from 'next/router';

// Components
import Grid from '@material-ui/core/Grid';
import InputField from 'components/InputField';
import SubmitButtons from 'components/SubmitButtons';
import Loading from 'components/Loading';

// Others
import useFetch from 'src/hooks/useFetch';
import { formValuesSchema, FormValues } from './formSchema';
import useStyles from './styles';

const FORM_NAME = 'LoginForm';

export const LoginForm = ({}: LoginFormProps) => {
  const classes = useStyles();
  const router = useRouter();

  const authLogin = useFetch({
    method: 'POST',
    endpoint: '/api/auth/login/',
    noAuth: true,
  });

  const initialValues: FormValues = {
    email: '',
    password: '',
  };

  const handleSubmit = useCallback(
    (values, { setSubmitting, resetForm }: FormikHelpers<FormValues>) => {
      authLogin.submit(values).then((data) => {
        if (data) {
          localStorage.setItem('authToken', data.token);
          router.push('/data-leaks');
        }
      });

      setSubmitting(false);
      resetForm();
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
          <Loading {...authLogin}>
            <Form
              id={`${FORM_NAME}-Form`}
              noValidate
              className={classes.wrapper}
            >
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
                    <SubmitButtons
                      canSubmit={canSubmit}
                      canReset={canReset}
                      resetForm={resetForm}
                    />
                  </Grid>
                </Grid>
              </Grid>
            </Form>
          </Loading>
        );
      }}
    </Formik>
  );
};

export interface LoginFormProps {}

export default LoginForm;
