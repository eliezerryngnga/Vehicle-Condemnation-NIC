import React from "react";
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Textarea,
} from "@chakra-ui/react";
import { Field } from "formik";

const TextAreaField = ({
  name,
  label,
  isRequired = true,
  rows = 4,
  ...others
}) => {
  return (
    <Field name={name}>
      {({ field, meta }) => (
        <FormControl
          isRequired={isRequired}
          isInvalid={meta.error && meta.touched}
        >
          <FormLabel htmlFor={name}>{label}</FormLabel>
          <Textarea
            id={name}
            {...field}
            rows={rows}
            resize="none"
            {...others}
          />
          <FormErrorMessage>{meta.error}</FormErrorMessage>
        </FormControl>
      )}
    </Field>
  );
};

export default TextAreaField;
