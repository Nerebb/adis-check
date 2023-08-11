import * as yup from "yup";

//Regexp from Fe-source code
const passwordRegex = /^\S{6,}$/;

export const checkEmail = yup.string().email().required();

export const signInSchema = yup.object({
  email: yup.string().email().required(),
  password: yup
    .string()
    .required()
    .matches(
      passwordRegex,
      "Password must at least 6 non-whitespace character"
    ),
  rememberme: yup.boolean(),
});

export const signUpSchema = yup.object({
  email: yup.string().email().required(),
  password: yup
    .string()
    .required()
    .matches(
      passwordRegex,
      "Password must at least 6 non-whitespace characters"
    ),
  phone: yup.string().max(10),
  username: yup
    .string()
    .matches(
      passwordRegex,
      "Username must at least 6 non-whitespace characters"
    )
    .required(),
  confirmPassword: yup
    .string()
    .oneOf(
      [yup.ref("password"), null, undefined],
      "Confirm password not match"
    ),
  termsAndConditions: yup
    .boolean()
    .oneOf([true], "Please accept the terms and conditions."),
});
