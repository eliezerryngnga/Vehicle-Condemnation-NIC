import React, { useRef } from "react";
import { Form, Formik } from "formik";
import * as yup from "yup";
import { Button, Stack, useToast } from "@chakra-ui/react";
import PasswordField from "../../components/core/formik/PasswordField";
import { useChangePassword } from "../../hooks/profileQueries";
import { useGetPublicKey } from "../../hooks/authQueries";
import { encryptRSA } from "../../components/utils/security";

const ChangePasswordForm = () => {
  // Hooks
  const toast = useToast();
  const formikRef = useRef();

  // Queries
  const publicKeyQuery = useGetPublicKey();
  const changePasswordQuery = useChangePassword(
    (response) => {
      formikRef.current.resetForm();
      toast({
        isClosable: true,
        duration: 3000,
        position: "top-right",
        status: "success",
        title: "Success",
        description: response.data.detail || "Password changed successfully",
      });
      return response;
    },
    (error) => {
      toast({
        isClosable: true,
        duration: 3000,
        position: "top-right",
        status: "error",
        title: "Error",
        description:
          error.response.data.detail ||
          "Oops! Something went wrong. Couldn't change password.",
      });
      return error;
    }
  );

  // Formik
  const initialValues = {
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  };

  const validationSchema = yup.object({
    oldPassword: yup.string().required("Old Password is required"),
    newPassword: yup
      .string()
      .matches(/(?=.*[a-z])/, "At least 1 lowercase letter")
      .matches(/(?=.*[A-Z])/, "At least 1 uppercase letter")
      .matches(/(?=.*\d)/, "At least 1 number")
      .matches(/(?=.*[#^@$!%*?&])/, "At least 1 special character")
      .min(8, "New Password must be between 8 to 255 characters")
      .max(255, "New Password must be between 8 to 255 characters")
      .required("New Password is required"),
    confirmPassword: yup
      .string()
      .matches(/(?=.*[a-z])/, "At least 1 lowercase letter")
      .matches(/(?=.*[A-Z])/, "At least 1 uppercase letter")
      .matches(/(?=.*\d)/, "At least 1 number")
      .matches(/(?=.*[#^@$!%*?&])/, "At least 1 special character")
      .min(8, "Password must be between 8 to 255 characters")
      .max(255, "Password must be between 8 to 255 characters")
      .oneOf([yup.ref("newPassword"), null], "Passwords must match")
      .required("Password confirmation is required"),
  });

  const onSubmit = (values) => {
    const publicKey = publicKeyQuery?.data?.data?.publicKey;
    const formData = { ...values };
    delete formData.confirmPassword;

    formData.oldPassword = encryptRSA(formData.oldPassword, publicKey);
    formData.newPassword = encryptRSA(formData.newPassword, publicKey);
    changePasswordQuery.mutate(formData);
  };

  return (
    <Formik
      innerRef={formikRef}
      enableReinitialize={true}
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => {
        return (
          <Stack as={Form} spacing={4}>
            <PasswordField
              name="oldPassword"
              label="Old Password"
              placeholder="Enter your old password"
            />
            <PasswordField
              name="newPassword"
              label="New Password"
              placeholder="Enter your new password"
            />
            <PasswordField
              name="confirmPassword"
              label="Confirm New Password"
              placeholder="Retype your new password"
            />

            <Button
              type="submit"
              variant="brand"
              isLoading={changePasswordQuery.isPending}
              loadingText="Updating"
            >
              Update Password
            </Button>
          </Stack>
        );
      }}
    </Formik>
  );
};

export default ChangePasswordForm;
