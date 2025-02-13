import React, { useState } from "react";
import {
  IconButton,
  Input,
  Field,
  Box,
  HStack,
} from "@chakra-ui/react";

import { Field as FormikField } from "formik";

import { FiEye, FiEyeOff } from "react-icons/fi";
import { InputGroup } from "@/components/ui/input-group";

const PasswordField = ({ name, label, required=true, ...others }) => {
  // States
  const [show, setShow] = useState(false);

  // Handlers
  const handleClick = () => {
    setShow((prev) => !prev);
  };
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

        <HStack gap="10" width="full">
          <InputGroup flex="1">
          <>
            <Input
              type={show ? "text" : "password"}
              id={name}
              {...field}
              {...others}
            />
            <IconButton size="sm" variant="ghost" onClick={handleClick}>
              {show ? <FiEyeOff size={20} /> : <FiEye size={20} />}
            </IconButton>
          </>
          </InputGroup>
        </HStack>
          

          <Field.ErrorText>{meta.error}</Field.ErrorText>
        </Field.Root>
      )}
    </FormikField>
  );
};

export default PasswordField;
