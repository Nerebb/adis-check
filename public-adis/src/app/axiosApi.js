//List of queries to be-adis

import axiosClient from "./axiosClient";
import { BASE_API } from "./config";

const axiosApi = {
  login: ({ email, password }) => {
    const url = BASE_API + "/auth/login";
    return axiosClient.post(url, { email, password });
  },
  register: (allowedField) => {
    const url = BASE_API + "/user/register";
    return axiosClient.post(url, allowedField);
  },
  recover: (email) => {
    const url = BASE_API + "/user/recover";
    return axiosClient.post(url, { email });
  },
};

export default axiosApi;
