import React, { useState } from "react";
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { Field } from "formik";
import { FiEye, FiEyeOff } from "react-icons/fi";

const PasswordField = ({ name, label, isRequired = true, ...others }) => {
  // States
  const [show, setShow] = useState(false);

  // Handlers
  const handleClick = () => {
    setShow((prev) => !prev);
  };
  return (
    <Field name={name}>
      {({ field, meta }) => (
        <FormControl
          isRequired={isRequired}
          isInvalid={meta.error && meta.touched}
        >
          <FormLabel htmlFor={name}>{label}</FormLabel>
          <InputGroup>
            <Input
              type={show ? "text" : "password"}
              id={name}
              {...field}
              {...others}
            />
            <InputRightElement>
              <IconButton size="sm" variant="ghost" onClick={handleClick}>
                {show ? <FiEyeOff size={20} /> : <FiEye size={20} />}
              </IconButton>
            </InputRightElement>
          </InputGroup>
          <FormErrorMessage>{meta.error}</FormErrorMessage>
        </FormControl>
      )}
    </Field>
  );
};

export default PasswordField;
