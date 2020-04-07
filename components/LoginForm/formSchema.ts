import * as yup from 'yup';

export const formValuesSchema = yup.object().shape({
  email: yup
    .string()
    .email('Your email is invalid.')
    .required('You must provide an email.'),
  password: yup
    .string()
    .min(6, 'Your password needs to have at least 6 characters.')
    .required('You must provide a password.'),
});

/**
 * Creates a TypeScript type based on the formValuesSchema.
 */
export type FormValues = yup.InferType<typeof formValuesSchema>;
