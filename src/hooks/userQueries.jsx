import { useQuery } from "@tanstack/react-query";
import { request } from "../components/utils/request";

// GET: Users Profile
const fetchUsersProfile = () => {
  return request({
    url: "/users/profile",
    method: "get",
  });
};

export const useFetchUsersProfile = () => {
  return useQuery({
    queryKey: ["fetch-users-profile"],
    queryFn: fetchUsersProfile,
    retry: 0,
  });
};
