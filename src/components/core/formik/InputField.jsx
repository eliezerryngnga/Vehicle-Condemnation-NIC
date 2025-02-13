import React from "react";
import {
  Field,
  Input,
} from '@chakra-ui/react';
import { Field as FormikField } from "formik";

const InputField = ({ name, label, required=true, type="text", ...others }) => {
  return (
    <FormikField name={name}>
      {({ field, meta }) => (

        <Field.Root 
        required={required}
        invalid = {meta.error && meta.touched}
        >
          <Field.Label color="black" htmlFor={name}>
            {label}
           <span style={{ color: "red" }}>*</span> 
          </Field.Label>
          <Input
            type={type}
            id={name}
            {...field}
            {...others}
          />
          <Field.ErrorText>{meta.error}</Field.ErrorText>
        </Field.Root>
      )}
    </FormikField>
  );
};

export default InputField;
