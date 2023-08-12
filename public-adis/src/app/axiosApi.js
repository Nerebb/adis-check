//List of queries to be-adis

import axiosClient from "./axiosClient";
import { BASE_API } from "./config";

const USER_ENDPOINT = BASE_API + "/user";
const AUTH_ENDPOINT = BASE_API + "/auth";

const axiosApi = {
  login: ({ email, password }) => {
    const url = AUTH_ENDPOINT + "/login";
    return axiosClient.post(url, { email, password });
  },
  register: (allowedField) => {
    const url = USER_ENDPOINT + "/register";
    return axiosClient.post(url, allowedField);
  },
  recover: (email) => {
    const url = USER_ENDPOINT + "/recover";
    return axiosClient.post(url, { email });
  },
  getProfile: () => {
    const url = USER_ENDPOINT + "/me";
    return axiosClient.get(url);
  },
};

export default axiosApi;
