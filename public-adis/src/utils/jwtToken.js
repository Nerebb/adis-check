import jwtDecode from "jwt-decode";
import axiosClient from "../app/axiosClient";

export function setToken(token) {
  if (token) {
    window.localStorage.setItem("accessToken", token);
    axiosClient.defaults.headers.common.Authorization = `Bearer ${token}`;
  } else {
    window.localStorage.removeItem("accessToken");
    delete axiosClient.defaults.headers.common.Authorization;
  }
}

export function isValidToken(token) {
  if (!token) return false;
  const decoded = jwtDecode(token);
  const curTime = Date.now() / 1000;

  return decoded && decoded.exp > curTime ? true : false;
}
