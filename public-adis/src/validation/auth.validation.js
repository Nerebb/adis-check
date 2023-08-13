import * as yup from "yup";

//Regexp from Fe-source code
const passwordRegex = /^\S{6,}$/;

export const checkEmail = yup
  .string()
  .email("Invalid email")
  .required("Email is required");

export const checkPassword = yup
  .string()
  .required()
  .matches(passwordRegex, "Password must at least 6 non-whitespace character");

export const signInSchema = yup.object({
  email: checkEmail,
  password: checkPassword,
  rememberme: yup.boolean(),
});

export const signUpSchema = yup.object({
  email: checkEmail,
  password: checkPassword,
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
