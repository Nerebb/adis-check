//List of queries to be-adis

import { cloudinaryUpload } from "../utils/cloudinary";
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
  getAdsBySearch: (q) => {
    const url = BASE_API + "/ads";
    return axiosClient.get(url, { params: { ...q } });
  },
  getAdsByCategory: (id) => {
    const url = BASE_API + `/ads/category/${id}`;
    return axiosClient.get(url);
  },
  getDetail: (id) => {
    const url = BASE_API + `/ads/detail/${id}`;
    return axiosClient.get(url);
  },
  createAds: (data) => {
    const url = BASE_API + `/ads`;

    return axiosClient.post(url, {
      data,
    });
  },

  updateAds: (id, data) => {
    const url = BASE_API + `/ads/${id}`;

    return axiosClient.put(url, {
      data,
    });
  },
  updateStatus: (id, data) => {
    const url = BASE_API + `/ads/status/${id}`;
    return axiosClient.patch(url, {
      data,
    });
  },
  getCountries: (q) => {
    const url = BASE_API + "/ads/location/countries";
    return axiosClient.get(url, { params: { q } });
  },
  getCites: (id) => {
    const url = BASE_API + `/ads/location/cites/${id}`;
    return axiosClient.get(url);
  },
  getStates: (id) => {
    const url = BASE_API + `/ads/location/states/${id}`;
    return axiosClient.get(url);
  },
  getCategory: () => {
    const url = BASE_API + `/category`;
    return axiosClient.get(url);
  },
  getProfile: () => {
    const url = USER_ENDPOINT + "/me";
    return axiosClient.get(url);
  },
  updateProfile: async (data) => {
    const { ...allowedField } = data;
    if (allowedField.avatar) {
      const imgUrl = await cloudinaryUpload(allowedField.avatar);
      allowedField.avatar = imgUrl;
    }
    if (allowedField.cover) {
      const imgUrl = await cloudinaryUpload(allowedField.cover);
      allowedField.cover = imgUrl;
    }
    const url = USER_ENDPOINT + "/update";
    return axiosClient.put(url, allowedField);
  },
  checkPassword: async (password) =>
    axiosClient.post(AUTH_ENDPOINT + "/checkPassword", { password }),
};

export default axiosApi;
