import { useFormik } from "formik";
import React, { useState } from "react";
import { useAuth } from "../../context/authContext";
import { signUpSchema } from "../../validation/auth.validation";
import { LoadingSpinner } from "../constants/LoadingSpinner";

const initialValues = {
  email: "test@randomail",
  username: "testUser",
  phone: 12334238,
  password: "password1231",
  confirmPassword: "password1231",
  termsAndConditions: true,
};

export const SignUpForm = () => {
  const { signUp } = useAuth();
  const [formMessage, setFormMessage] = useState("");
  const formik = useFormik({
    initialValues,
    validationSchema: signUpSchema,
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      try {
        setSubmitting(true);
        setFormMessage("");
        //Debounce
        await new Promise((_) => setTimeout(_, 2000));

        await signUp(values, async (response) => {
          if (response && response.message) {
            setFormMessage("Registered successfully, redirect to login form");
            resetForm();
            await new Promise((_) => setTimeout(_, 1000));
            window.location.reload();
          }
        });
      } catch (error) {
        setSubmitting(false);
        setFormMessage(error.message ?? "Register failed please try again");
      }
    },
  });

  return (
    <form id="singnupFrom" onSubmit={formik.handleSubmit}>
      <div class="form-group">
        <label class="font-weight-bold">
          Email <span class="text-danger">*</span>
        </label>
        <input
          type="text"
          name="email"
          id="signupemail"
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
          User Name
          <span class="text-danger">*</span>
        </label>
        <input
          type="text"
          name="username"
          id="signupusername"
          class="form-control"
          placeholder="Choose your user name"
          value={formik.values.username}
          onChange={formik.handleChange}
        />
        {formik.errors.username ? (
          <div className="text-danger cap-first-letter">
            {formik.errors.username}
          </div>
        ) : (
          <div class="text-danger">
            <em>This will be your login name!</em>
          </div>
        )}
      </div>
      <div class="form-group">
        <label class="font-weight-bold">Phone #</label>
        <input
          type="number"
          inputMode="numeric"
          name="phone"
          id="signupphone"
          class="form-control hideNumSpin"
          placeholder="(000)-(0000000)"
          value={formik.values.phone}
          onKeyDown={(evt) =>
            ["e", "E", "+", "-"].includes(evt.key) && evt.preventDefault()
          }
          onChange={formik.handleChange}
        />
        {formik.errors.phone && (
          <div className="text-danger cap-first-letter">
            {formik.errors.phone}
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
        <label class="font-weight-bold">
          Confirm Password
          <span class="text-danger">*</span>
        </label>
        <input
          type="password"
          id="confirmPassword"
          class="form-control"
          value={formik.values.confirmPassword}
          onChange={formik.handleChange}
          placeholder="***********"
        />
        {formik.errors.confirmPassword && (
          <div className="text-danger cap-first-letter">
            {formik.errors.confirmPassword}
          </div>
        )}
      </div>
      <div class="form-group">
        <label>
          <input
            type="checkbox"
            name="termsAndConditions"
            id="termsAndConditions"
            checked={formik.values.termsAndConditions}
            onChange={formik.handleChange}
            value={formik.values.termsAndConditions}
          />
          I agree with the
          <a href="javascript:;">Terms &amp; Conditions</a>
          for Registration.
        </label>
        {formik.errors.termsAndConditions && (
          <div className="text-danger cap-first-letter">
            {formik.errors.termsAndConditions}
          </div>
        )}
      </div>
      <div class="form-group">
        <button
          type="submit"
          name="submit"
          class="custom-button"
          disabled={formik.isSubmitting}
          style={{ position: "relative" }}
        >
          {formik.isSubmitting ? <LoadingSpinner /> : "Sign Up"}
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
