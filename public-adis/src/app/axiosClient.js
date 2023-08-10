import axios from "axios";
import { apiConfig } from "./config";

const axiosClient = axios.create({
  baseUrl: apiConfig.baseUrl,
  headers: { ...apiConfig.headers },
});

//CatchError
axiosClient.interceptors.request.use(
  (request) => {
    console.log("Requesting", request.url);
    return request;
  },
  (error) => {
    console.log("RequestError", error);
    return Promise.reject(error);
  }
);

axiosClient.interceptors.response.use(
  (response) => {
    if (response && response.data) return response.data;
    return response;
  },
  (error) => {
    const err = error.response.data.errors ?? error;
    throw err;
  }
);

export default axiosClient;
