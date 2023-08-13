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
};

export default axiosApi;
