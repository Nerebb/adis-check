import { useFormik } from "formik";
import { useState } from "react";
import { useAuth } from "../../context/authContext";
import { signInSchema } from "../../validation/auth.validation";
import { LoadingSpinner } from "../constants/LoadingSpinner";
import { BASE_URL } from "../../app/config";

const SignInForm = ({ email }) => {
  const [formMessage, setFormMessage] = useState("");
  const { signIn } = useAuth();
  const initialValues = {
    email: email ?? "facedev1806@gmail.com",
    password: "password",
    rememberme: true,
  };

  const formik = useFormik({
    initialValues,
    enableReinitialize: true,
    validationSchema: signInSchema,
    onSubmit: async (values, { setSubmitting }) => {
      setSubmitting(true);
      setFormMessage("");
      //Debounce
      await new Promise((_) => setTimeout(_, 2000));
      try {
        await signIn(
          {
            email: values.email,
            password: values.password,
            rememberme: values.rememberme,
          },
          //ResponseCallback
          async (response) => {
            setSubmitting(false);
            if (response && response.data) {
              setFormMessage("Login success redirecting to Dashboard...");
              await new Promise((_) => setTimeout(_, 1000));

              // window.location.replace(BASE_URL + "/dashboard");
            }
          }
        );
      } catch (error) {
        console.log("🚀 ~ file: SignInForm.js:44 ~ onSubmit: ~ error:", error);
        setSubmitting(false);
        setFormMessage(
          error.message ?? "Login failed: Unknown error - Please tryagain"
        );
      }
    },
  });
  return (
    <form id="singninFrom" onSubmit={formik.handleSubmit}>
      <div class="form-group">
        <label class="font-weight-bold">
          Email <span class="text-danger">*</span>
        </label>
        <input
          type="text"
          name="email"
          id="email"
          class="form-control"
          placeholder="Enter valid email"
          value={formik.values.email}
          onChange={formik.handleChange}
        />
        {formik.errors.email && (
          <div className="text-danger cap-first-letter">
            {formik.errors.email}
          </div>
        )}
      </div>
      <div class="form-group">
        <label class="font-weight-bold">
          Password
          <span class="text-danger">*</span>
        </label>
        <input
          type="password"
          name="password"
          id="password"
          class="form-control"
          placeholder="***********"
          value={formik.values.password}
          onChange={formik.handleChange}
        />
        {formik.errors.password && (
          <div className="text-danger cap-first-letter">
            {formik.errors.password}
          </div>
        )}
      </div>
      <div class="form-group">
        <div class="row">
          <div class="col-lg-6 col-md-6 col-sm-6 col-6">
            <label>
              <input
                type="checkbox"
                name="rememberme"
                id="condition"
                checked={formik.values.rememberme}
                value={formik.values.rememberme}
                onChange={formik.handleChange}
              />
              Remember me.
            </label>
          </div>
          <div class="col-lg-6 col-md-6 col-sm-6 col-6 text-left text-sm-right text-lg-right text-md-right text-xl-right">
            <a
              href="javascript:;"
              data-toggle="modal"
              data-target="#forgotPass"
            >
              Forgot Password?
            </a>
          </div>
        </div>
      </div>
      <div class="form-group">
        <button
          type="submit"
          name="submit"
          class="custom-button"
          disabled={formik.isSubmitting}
          style={{ position: "relative" }}
        >
          {formik.isSubmitting ? <LoadingSpinner /> : "Sign In"}
        </button>
        {formMessage && (
          <div
            class="text-danger cap-first-letter"
            style={{
              textAlign: "center",
              fontWeight: "bold",
              marginTop: "5px",
            }}
          >
            {formMessage}
          </div>
        )}
      </div>
    </form>
  );
};

export default SignInForm;
