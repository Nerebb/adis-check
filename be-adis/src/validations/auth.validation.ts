import * as yup from 'yup';
//Regexp from Fe-source code
const passwordRegex = /^\S{6,}$/;

export const checkEmail = yup.object({ body: yup.object({ email: yup.string().email().required() }) });

export const checkPassword = yup.object({
  body: yup.object({
    password: yup
      .string()
      .required()
      .matches(
        passwordRegex,
        "Password must at least 6 non-whitespace character"
      )
  })
})

export const signInSchema = yup.object({
  body: yup.object({
    email: yup.string().email().required(),
    password: yup
      .string()
      .required()
      .matches(
        passwordRegex,
        "Password must at least 6 non-whitespace character"
      )
  }),
});

export const signUpSchema = yup.object({
  body: yup.object({
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
  })
});
