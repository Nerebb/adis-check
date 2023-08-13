import * as yup from "yup";

export const allowedGender = ["Male", "Female", "NonBinary"];

export const updateProfileSchema = yup.object({
  username: yup.string().min(4).max(20),
  email: yup.string().email(),
  password: yup.string(),
  firstName: yup.string().min(4).max(100),
  lastName: yup.string().min(4).max(100),
  phone: yup.string().min(9).max(20),
  country: yup.string().min(2).max(2),
  gender: yup.string().oneOf(allowedGender, "Invalid gender"),
  bio: yup.string(),
  avatar: yup.string(),
  cover: yup.string(),
});
