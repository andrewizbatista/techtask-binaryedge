import React from 'react';
import InputField from '.';

export default {
  title: 'Components/InputField',
  component: InputField,
  decorators: [],
  parameters: {},
};

export const Basic = () => (
  <InputField
    type="text"
    name="basic"
    label="Basic Example"
    value=""
    error={undefined}
    touch={false}
    handleBlur={() => true}
    handleChange={() => true}
  />
);

export const WithError = () => (
  <InputField
    type="text"
    name="basic"
    label="With Error Example"
    value=""
    error="This is an error message."
    touch
    handleBlur={() => true}
    handleChange={() => true}
  />
);
