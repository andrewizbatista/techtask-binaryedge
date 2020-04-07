import React, { useCallback } from 'react';
import { Formik, FormikProps, FormikHelpers, Form } from 'formik';

// Components
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import InputField from 'components/InputField';
import SubmitButtons from 'components/SubmitButtons';

// Utils
import { formValuesSchema, FormValues } from './formSchema';
import useStyles from './styles';

const FORM_NAME = 'SearchByDomain';

export const SearchByDomain = ({ setSearchTerm }: SearchByDomainProps) => {
  const classes = useStyles();

  /**
   * Initial Values
   */
  const initialValues: FormValues = {
    domain: '',
  };

  /**
   * Submit
   */
  const handleSubmit = useCallback(
    (values, { setSubmitting, resetForm }: FormikHelpers<FormValues>) => {
      console.log(FORM_NAME, values);

      setSearchTerm(values.domain);
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
              <Grid item xs={4}>
                <InputField
                  type="text"
                  name="domain"
                  label="Domain"
                  value={values.domain}
                  error={errors.domain}
                  touch={touched.domain}
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

export interface SearchByDomainProps {
  setSearchTerm: any;
}

export default SearchByDomain;
