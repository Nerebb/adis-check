export const BASE_URL = process.env.REACT_APP_BASE_URL;
export const BASE_API = process.env.REACT_APP_BASE_API;
export const CLOUDINARY_CLOUD_NAME =
  process.env.REACT_APP_CLOUDINARY_CLOUD_NAME;
export const CLOUDINARY_UPLOAD_PRESET =
  process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET;

export const apiConfig = {
  baseUrl: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
};
