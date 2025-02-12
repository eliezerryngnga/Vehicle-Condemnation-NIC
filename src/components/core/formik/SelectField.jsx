import React from "react";
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Select,
} from "@chakra-ui/react";
import { Field } from "formik";

const SelectField = ({
  name,
  label,
  isRequired = true,
  placeholder,
  children,
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
          <Select id={name} placeholder={placeholder} {...field} {...others}>
            {children}
          </Select>
          <FormErrorMessage>{meta.error}</FormErrorMessage>
        </FormControl>
      )}
    </Field>
  );
};

export default SelectField;
