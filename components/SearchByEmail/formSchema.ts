import * as yup from 'yup';

const regexDomain = /(?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)+[a-z0-9][a-z0-9-]{0,61}[a-z0-9]/g;

export const formValuesSchema = yup.object().shape({
  email: yup
    .string()
    .email('Your email is invalid.')
    .required('You must provide an email.'),
});

/**
 * Creates a TypeScript type based on the formValuesSchema.
 */
export type FormValues = yup.InferType<typeof formValuesSchema>;
