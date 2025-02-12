import { useMutation, useQuery } from "@tanstack/react-query";
import { request } from "../components/utils/request";

const API_KEY = import.meta.env.VITE_API_KEY;

// GET: Public Key
const getPublicKey = () => {
  return request({
    url: "/auth/get-public-key",
    method: "get",
    headers: {
      "API-Key": API_KEY,
    },
  });
};

export const useGetPublicKey = () => {
  return useQuery({
    queryKey: ["get-public-key"],
    queryFn: getPublicKey,
  });
};

// GET: Refresh Captcha
const fetchRefreshCaptcha = () => {
  return request({
    url: "/auth/refresh-captcha",
    method: "get",
    headers: {
      "API-Key": API_KEY,
    },
  });
};

export const useFetchRefreshCaptcha = () => {
  return useQuery({
    queryKey: ["fetch-refresh-captcha"],
    queryFn: fetchRefreshCaptcha,
  });
};

// POST: Register User
const registerUser = (data) => {
  return request({
    url: "/auth/register",
    method: "post",
    headers: {
      "API-Key": API_KEY,
    },
    data,
  });
};

export const useRegisterUser = (onSuccess, onError) => {
  return useMutation({
    mutationFn: registerUser,
    onSuccess,
    onError,
  });
};

// POST: Logout User
const logoutUser = () => {
  return request({
    url: "/auth/logout",
    method: "get",
    headers: {
      "API-Key": API_KEY,
    },
  });
};

export const useLogoutUser = (onSuccess, onError) => {
  return useMutation({
    mutationFn: logoutUser,
    onSuccess,
    onError,
  });
};

// POST: Authenticate User
const authenticateuser = (data) => {
  return request({
    url: "/auth/authenticate",
    method: "post",
    headers: {
      "API-Key": API_KEY,
    },
    data,
  });
};

export const useAuthenticateUser = (onSuccess, onError) => {
  return useMutation({
    mutationFn: authenticateuser,
    onSuccess,
    onError,
  });
};
