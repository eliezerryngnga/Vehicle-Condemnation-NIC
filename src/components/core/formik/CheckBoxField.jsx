import React from "react";
import {
  Checkbox,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { Field } from "formik";

const CheckBoxField = ({ name, label, isRequired = true, ...others }) => {
  return (
    <Field name={name}>
      {({ field, meta }) => (
        <FormControl
          isRequired={isRequired}
          isInvalid={meta.error && meta.touched}
        >
          <FormLabel htmlFor={name}>
            <Checkbox id={name} isChecked={field.value} {...field} {...others}>
              {label}
            </Checkbox>
          </FormLabel>
          <FormErrorMessage>{meta.error}</FormErrorMessage>
        </FormControl>
      )}
    </Field>
  );
};

export default CheckBoxField;
