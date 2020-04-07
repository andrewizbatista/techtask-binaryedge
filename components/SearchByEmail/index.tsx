import React, { useCallback } from 'react';
import { Formik, FormikProps, FormikHelpers, Form } from 'formik';

// Components
import Grid from '@material-ui/core/Grid';
import InputField from 'components/InputField';
import SubmitButtons from 'components/SubmitButtons';

// Others
import { fetcherWithToken } from 'src/api';
import { formValuesSchema, FormValues } from './formSchema';
import useStyles from './styles';

const FORM_NAME = 'SearchByEmail';

export const SearchByEmail = ({
  setSearchTerm,
  setDataLeaks,
  setIsLoading,
}: SearchByEmailProps) => {
  const classes = useStyles();

  /**
   * Initial Values
   */
  const initialValues: FormValues = {
    email: '',
  };

  /**
   * Submit
   */
  const handleSubmit = useCallback(
    (values, { setSubmitting, resetForm }: FormikHelpers<FormValues>) => {
      setIsLoading(true);

      fetcherWithToken('GET', `/api/v1/email/dataleaks?email=${values.email}`)
        .then((data: any) => {
          const mutatedData = [...data];

          for (let i = 0, ii = mutatedData.length; i < ii; i++) {
            mutatedData[i].emails = [{ email: values.email }];
          }

          setSearchTerm(values.email);
          setDataLeaks(mutatedData);
          setIsLoading(false);
        })
        .catch((err) => {
          setIsLoading(false);
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
          <Form id={`${FORM_NAME}-Form`} noValidate className={classes.wrapper}>
            <Grid
              container
              direction="row"
              justify="flex-start"
              alignItems="flex-start"
            >
              <Grid item xs={6}>
                <InputField
                  type="email"
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
                <Grid
                  container
                  justify="flex-start"
                  alignItems="flex-start"
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
        );
      }}
    </Formik>
  );
};

export interface SearchByEmailProps {
  setSearchTerm: any;
  setDataLeaks: any;
  setIsLoading: any;
}

export default SearchByEmail;
