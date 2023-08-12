import { useFormik } from "formik";
import React, { useState } from "react";
import axiosApi from "../../app/axiosApi";
import {
  allowedGender,
  updateProfileSchema,
} from "../../validation/user.validation";
import { LoadingCircle } from "../constants/LoadingCircle";
import { CusPhoneInput } from "./customField/CusPhoneInput";
import { RadioGroup } from "./customField/RadioGroup";
import { SelectionInput } from "./customField/SelectionInput";
import { ConfirmPassword } from "../constants/ConfirmPassword";

const initialValues = {
  firstName: undefined,
  lastName: undefined,
  username: undefined,
  password: undefined,
  phone: undefined,
  country: undefined,
  gender: undefined,
  avatar: undefined,
  bio: undefined,
};

export const DashboardForm = () => {
  const [formMessage, setFormMessage] = useState("");
  const formik = useFormik({
    initialValues,
    validationSchema: updateProfileSchema,
    onSubmit: async (values, { setSubmitting }) => {
      try {
        setSubmitting(true);
        //Debounce
        await new Promise((_) => setTimeout(_, 2000));
        await axiosApi.updateProfile({ ...values });

        setSubmitting(false);
        setFormMessage("Update profile successfully");
      } catch (error) {
        setFormMessage(
          error.message ?? "Cannot update profile - Please try again"
        );
        setSubmitting(false);
      }
    },
  });
  return (
    <form class="row" onSubmit={formik.handleSubmit}>
      <div class="col-md-6 col-xl-6 col-lg-6 col-sm-12 col-12">
        <div class="form-group">
          <label htmlFor="firstName" class="font-weight-bold">
            First Name
          </label>
          <input
            id="firstName"
            type="text"
            class="form-control"
            value={formik.values.firstName}
            onChange={formik.handleChange}
          />
        </div>
        {formik.errors.firstName && (
          <div className="text-danger cap-first-letter">
            {formik.errors.firstName}
          </div>
        )}
      </div>
      <div class="col-md-6 col-xl-6 col-lg-6 col-sm-12 col-12">
        <div class="form-group">
          <label htmlFor="lastName" class="font-weight-bold">
            Last Name
          </label>
          <input
            id="lastName"
            type="text"
            class="form-control"
            value={formik.values.lastName}
            onChange={formik.handleChange}
          />
          {formik.errors.lastName && (
            <div className="text-danger cap-first-letter">
              {formik.errors.lastName}
            </div>
          )}
        </div>
      </div>
      <div class="col-md-6 col-xl-6 col-lg-6 col-sm-12 col-12">
        <div class="form-group">
          <label htmlFor="username" class="font-weight-bold">
            User Name
          </label>
          <input
            id="username"
            type="text"
            class="form-control"
            placeholder="This will be your login name!"
            value={formik.values.username}
            onChange={formik.handleChange}
          />
          {formik.errors.username && (
            <div className="text-danger cap-first-letter">
              {formik.errors.username}
            </div>
          )}
        </div>
      </div>
      <div class="col-md-6 col-xl-6 col-lg-6 col-sm-12 col-12">
        <div class="form-group">
          <label htmlFor="password" class="font-weight-bold">
            Password
          </label>
          <input
            id="password"
            type="password"
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
      </div>
      <div class="col-md-6 col-xl-6 col-lg-6 col-sm-12 col-12">
        <CusPhoneInput {...formik} />
        {formik.errors.phone && (
          <div className="text-danger cap-first-letter">
            {formik.errors.phone}
          </div>
        )}
      </div>
      <div class="col-md-6 col-xl-6 col-lg-6 col-sm-12 col-12">
        <SelectionInput label="Country" formikForm={formik} />
        {formik.errors.country && (
          <div className="text-danger cap-first-letter">
            {formik.errors.country}
          </div>
        )}
      </div>
      <div class="col-md-6 col-xl-6 col-lg-6 col-sm-12 col-12">
        <RadioGroup
          label={"gender"}
          options={allowedGender}
          formikForm={formik}
        />
      </div>
      <div class="col-md-6 col-xl-6 col-lg-6 col-sm-12 col-12">
        <div class="form-group">
          <label
            htmlFor="avatar"
            class="upload-btn"
            style={{ cursor: "pointer" }}
          >
            <input
              type="file"
              name="avatar"
              id="avatar"
              value={formik.values.avatar}
              onChange={formik.handleChange}
            />
            <i class="fa fa-upload"></i> Upload Profile Image
          </label>
          <img src="img/logo.png" class="img-upload" alt="logo" />
        </div>
      </div>
      <div class="col-md-12 col-xl-12 col-lg-12 col-sm-12 col-12">
        <div class="form-group">
          <label htmlFor="bio" class="font-weight-bold">
            Biography
          </label>
          <textarea
            cols="50"
            id="bio"
            class="sizetextarea col-md-12 col-xl-12 col-lg-12 col-sm-12 col-12"
            value={formik.values.bio}
            onChange={formik.handleChange}
          ></textarea>
        </div>
      </div>
      <div class="col-md-12 col-xl-12 col-lg-12 col-sm-12 col-12">
        <div class="form-group">
          <ConfirmPassword
            buttonLabel="Update profile"
            onClick={formik.handleSubmit}
          />
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
      </div>
    </form>
  );
};
