import React from "react";
import {
  Field,
  Input,
} from '@chakra-ui/react';

import { useField } from "formik";

const InputField = ({ name, label, required=true, type="text", ...others }) => {
  const [field, meta] = useField(name);

  return (
        <Field.Root 
        invalid = {meta.error && meta.touched}
        >
          <Field.Label color="black" htmlFor={name}>
            {label}
           <span style={{ color: "red" }}>*</span> 
          </Field.Label>
          <Input
            type={type}
            id={name}
            required={required}
            {...field}
            {...others}
          />
          <Field.ErrorText>{meta.error}</Field.ErrorText>
        </Field.Root>
  );
};

export default InputField;
