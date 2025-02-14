import React, { useEffect, useRef } from "react";

import {
  Box,
  Button,
  Heading,
  IconButton,
  Image,

  Separator,
  Skeleton,
  Stack,
  // useToast,
} from "@chakra-ui/react";

import { useToast } from '@chakra-ui/toast';

import { Tooltip } from "../../components/ui/tooltip";

import { Form, Formik  } from "formik";

import * as yup from "yup";

import InputField from "../../components/core/formik/InputField";
import PasswordField from "../../components/core/formik/PasswordField";

import { Link as RouterLink, useNavigate } from "react-router-dom";

import {
  useAuthenticateUser,
  useFetchRefreshCaptcha,
  useGetPublicKey,
} from "../../hooks/authQueries";

import { MdOutlineRefresh } from 'react-icons/md';

import { encryptRSA } from "../../components/utils/security";

const SignInForm = () => {
  // Hooks
  const formikRef = useRef();
  const toast = useToast();
  const navigate = useNavigate();

  // Queries
  const publicKeyQuery = useGetPublicKey();
  const captchaQuery = useFetchRefreshCaptcha();
  const authenticateQuery = useAuthenticateUser(
    (response) => {
      localStorage.setItem("access_token", response.data.access_token);
      localStorage.setItem("refresh_token", response.data.refresh_token);
      localStorage.setItem("role", response.data.role);

      switch (response.data.role) {
        case "USER":
          navigate("/user/dashboard");
          break;
        case "DA":
          navigate("/da/dashboard");
          break;
        case "CH":
          navigate("/ch/dashboard");
          break;
        case "CS":
          navigate("/cs/dashboard");
          break;
        case "EST":
          navigate("/est/dashboard");
          break;
        default:
          break;
      }

      return response;
    },
    (error) => {
      // Refresh Captcha
      captchaQuery.refetch();
      formikRef.current.setFieldValue("captcha", "");

      toast({
        isClosable: true,
        duration: 3000,
        position: "top-right",
        status: "error",
        title: "Error",
        description: error.response.data.detail,
      });
      return error;
    }
  );

  // Formik
  const initialValues = {
    username: "",
    password: "",
    captcha: "",
    captchaToken: "",
  };

  const validationSchema = yup.object({
    username: yup
      .string()
      .max(255, "Maximum 255 characters allowed")
      .required("Username is required"),
    password: yup
      .string()
      .matches(/(?=.*[a-z])/, "At least 1 lowercase letter")
      .matches(/(?=.*[A-Z])/, "At least 1 uppercase letter")
      .matches(/(?=.*\d)/, "At least 1 number")
      .matches(/(?=.*[#^@$!%*?&])/, "At least 1 special character")
      .min(8, "Password must be between 8 to 255 characters")
      .max(255, "Password must be between 8 to 255 characters")
      .required("Password is required"),
    captcha: yup.string().required("Captcha is required"),
    captchaToken: yup.string().required("Captcha token is required"),
  });

  const onSubmit = (values) => {
    const publicKey = publicKeyQuery?.data?.data?.publicKey;
    const formData = { ...values };

    formData.password = encryptRSA(formData.password, publicKey);
    authenticateQuery.mutate(formData);
  };

  useEffect(() => {
  
    if (captchaQuery.isSuccess) {
      formikRef.current.setFieldValue(
        "captchaToken",
        captchaQuery?.data?.data?.captchaToken
      );
    }
  }, [captchaQuery?.data?.data?.captchaToken]);

  return (
    <Formik
      innerRef={formikRef}
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => (
        <Stack as={Form} spacing={4}>
          <Stack>
            <Heading size="md" color="black">Login</Heading>
          </Stack>

          <Separator />

            <InputField
              type="text"
              color="black"
              label="Username"
              name="username"
              placeholder="Ex. user1"
            />

           
              <PasswordField
                label="Password"
                name="password"
                color="black"
                placeholder="Minimum 8 characters"
              />

          
          {/* Captcha Image Box */}
          <Box
            pos="relative"
            border="1px"
            borderColor="border"
            rounded="md"
            overflow="hidden"
          >
            <Skeleton
              isLoaded={!captchaQuery.isPending}
              h={100}
              fadeDuration={1}
            >
              <Image
                src={captchaQuery?.data?.data?.captchaImage}
                alt="Captcha Image"
                objectFit="fill"
                w="full"
                h="full"
              />
            </Skeleton>
            
            <Tooltip label="Refresh Captcha">
              <IconButton
                variant="brand"
                bg="#005468"
                icon={<MdOutlineRefresh size={20} color="blue"/>}
                pos="absolute"
                top={2}
                right={2}
                onClick={() => captchaQuery.refetch()}
                aria-label="Refresh-Captcha"
             />
            </Tooltip>
          </Box>

          {/* Captcha Field */}
          <InputField 
            name="captcha"
            label="Captcha"
            placeholder="Enter the captcha above"
          />

          <Button
            type="submit"
            variant="brand"
            isLoading={authenticateQuery.isPending}
            loadingText="Loading"
            bg="#005468"
          >
            Sign In
          </Button>

        </Stack>
      )}
    </Formik>
  );
};

export default SignInForm;
