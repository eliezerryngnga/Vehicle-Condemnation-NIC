import React, { useRef } from "react";
import { Form, Formik } from "formik";
import * as yup from "yup";
import { Button, Stack, useToast } from "@chakra-ui/react";
import InputField from "../../components/core/formik/InputField";
import { useUpdateProfile } from "../../hooks/profileQueries";
import { useQueryClient } from "@tanstack/react-query";

const UpdateProfileForm = ({ profileQuery }) => {
  // Hooks
  const toast = useToast();
  const formikRef = useRef();

  // Queries
  const queryClient = useQueryClient();
  const updateProfileQuery = useUpdateProfile(
    (response) => {
      queryClient.invalidateQueries(["fetch-users-profile"]);
      formikRef.current.resetForm();
      toast({
        isClosable: true,
        duration: 3000,
        position: "top-right",
        status: "success",
        title: "Success",
        description: response.data.detail || "Profile updated successfully",
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
          "Oops! Something went wrong. Couldn't update profile.",
      });
      return error;
    }
  );

  // Formik
  const initialValues = {
    name: profileQuery?.data?.data?.name,
    mobileNo: "",
    designation: profileQuery?.data?.data?.designation,
    department: profileQuery?.data?.data?.department,
  };

  const validationSchema = yup.object({
    name: yup
      .string()
      .max(255, "Maximum 255 characters allowed")
      .required("Full name is required"),
    mobileNo: yup
      .string()
      .matches(/^\d{10}$/, "Please enter a valid mobile number")
      .required("Mobile number is required"),
    designation: yup
      .string()
      .max(255, "Maximum 255 characters allowed")
      .required("Designation is required"),
    department: yup
      .string()
      .max(255, "Maximum 255 characters allowed")
      .required("Department is required"),
  });

  const onSubmit = (values) => {
    updateProfileQuery.mutate(values);
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
            <InputField
              name="name"
              label="Full name"
              placeholder="Ex. John Doe"
            />

            <InputField
              name="mobileNo"
              label="Mobile number"
              placeholder="Ex. 9876543210"
            />

            <InputField
              name="designation"
              label="Designation"
              placeholder="Enter your designation"
            />

            <InputField
              name="department"
              label="Department"
              placeholder="Enter your department name"
            />

            <Button
              type="submit"
              variant="brand"
              isLoading={updateProfileQuery.isPending}
              loadingText="Updating"
            >
              Update Profile
            </Button>
          </Stack>
        );
      }}
    </Formik>
  );
};

export default UpdateProfileForm;
