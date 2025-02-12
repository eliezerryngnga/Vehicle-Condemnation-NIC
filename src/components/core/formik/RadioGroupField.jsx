import React from "react";
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  RadioGroup,
} from "@chakra-ui/react";
import { Field } from "formik";

const RadioGroupField = ({ name, label, isRequired = true, children }) => {
  return (
    <Field name={name}>
      {({ field, meta, form }) => {
        return (
          <FormControl
            isRequired={isRequired}
            isInvalid={meta.error && meta.touched}
          >
            <FormLabel>{label}</FormLabel>
            <RadioGroup
              {...field}
              onChange={(value) => form.setFieldValue(name, value)}
            >
              {children}
            </RadioGroup>
            <FormErrorMessage>{meta.error}</FormErrorMessage>
          </FormControl>
        );
      }}
    </Field>
  );
};

export default RadioGroupField;
