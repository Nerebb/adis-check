import { useFormik } from "formik";
import React, { useState } from "react";
import { SelectionInput } from "./customField/SelectionInput";
import { LoadingCircle } from "../constants/LoadingCircle";
import { createAdsSchema } from "../../validation/ads.validation";

const initialValues = {
  ad_title: "",
  categoryId: "",
  make: "",
  model: "",
  type: "",
  price: "",
  condition: "",
  images: "",
  state: "",
  country: "",
  city: "",
  description: "",
};

export const PostAdsForm = () => {
  const [formMessage, setFormMessage] = useState("");
  const formik = useFormik({
    initialValues,
    validationSchema: createAdsSchema,
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      try {
        setSubmitting(true);
        //Debounce
        await new Promise((_) => setTimeout(_, 1500));
        setFormMessage("");
        console.log("submitFORM", values);
        setSubmitting(false);
        resetForm();
      } catch (error) {
        setSubmitting(false);
        setFormMessage(
          error.message ?? "Something went wrong - Please try again"
        );
      }
    },
  });
  return (
    <form class="row" onSubmit={formik.handleSubmit}>
      <div class="col-md-6 col-xl-6 col-lg-6 col-sm-12 col-12">
        <div class="form-group">
          <label htmlFor="ad_title" class="font-weight-bold">
            Ad title
          </label>
          <input
            id="ad_title"
            type="text"
            class="form-control"
            value={formik.values.ad_title}
            onChange={formik.handleChange}
          />
          {formik.errors.ad_title && (
            <div className="text-danger cap-first-letter">
              {formik.errors.ad_title}
            </div>
          )}
        </div>
      </div>
      <div class="col-md-6 col-xl-6 col-lg-6 col-sm-12 col-12">
        <SelectionInput
          label="categoryId"
          options={["Cars", "Properties", "Jobs", "Animals", "Phone"]}
          formikForm={formik}
        />
        {formik.errors.categoryId && (
          <div className="text-danger cap-first-letter">
            {formik.errors.categoryId}
          </div>
        )}
      </div>
      <div class="col-md-6 col-xl-6 col-lg-6 col-sm-12 col-12">
        <SelectionInput
          label="country"
          options={["1", "2", "3", "4"]}
          formikForm={formik}
        />
        {formik.errors.country && (
          <div className="text-danger cap-first-letter">
            {formik.errors.country}
          </div>
        )}
      </div>
      <div class="col-md-6 col-xl-6 col-lg-6 col-sm-12 col-12">
        <SelectionInput
          label="state"
          options={["state1", "state2", "state3"]}
          formikForm={formik}
        />
        {formik.errors.state && (
          <div className="text-danger cap-first-letter">
            {formik.errors.state}
          </div>
        )}
      </div>
      <div class="col-md-6 col-xl-6 col-lg-6 col-sm-12 col-12">
        <SelectionInput
          label="city"
          options={["city1", "city2", "city3"]}
          formikForm={formik}
        />
        {formik.errors.city && (
          <div className="text-danger cap-first-letter">
            {formik.errors.city}
          </div>
        )}
      </div>
      <div class="col-md-6 col-xl-6 col-lg-6 col-sm-12 col-12">
        <SelectionInput
          label="make"
          options={["Honda", "Toyota", "Faw"]}
          formikForm={formik}
        />
        {formik.errors.make && (
          <div className="text-danger cap-first-letter">
            {formik.errors.make}
          </div>
        )}
      </div>
      <div class="col-md-6 col-xl-6 col-lg-6 col-sm-12 col-12">
        <SelectionInput
          label="model"
          options={[1000, 2000, 3000]}
          formikForm={formik}
        />
        {formik.errors.model && (
          <div className="text-danger cap-first-letter">
            {formik.errors.model}
          </div>
        )}
      </div>
      <div class="col-md-6 col-xl-6 col-lg-6 col-sm-12 col-12">
        <SelectionInput
          label="type"
          options={["type1", "type2", "type3"]}
          formikForm={formik}
        />
        {formik.errors.type && (
          <div className="text-danger cap-first-letter">
            {formik.errors.type}
          </div>
        )}
      </div>
      <div class="col-md-6 col-xl-6 col-lg-6 col-sm-12 col-12">
        <div class="form-group">
          <label htmlFor="price" class="font-weight-bold">
            Price
          </label>
          <input
            type="text"
            class="form-control"
            id="price"
            value={formik.values.price}
            onChange={formik.handleChange}
          />
        </div>
        {formik.errors.price && (
          <div className="text-danger cap-first-letter">
            {formik.errors.price}
          </div>
        )}
      </div>
      <div class="col-md-6 col-xl-6 col-lg-6 col-sm-12 col-12">
        <SelectionInput
          label="condition"
          options={["New", "Old"]}
          formikForm={formik}
        />
      </div>
      <div class="col-md-12 col-xl-12 col-lg-12 col-sm-12 col-12">
        <div class="form-group uploadingsmultiple">
          <label htmlFor="file">
            <span>
              <i class="fa fa-upload"></i> Upload Images
            </span>
            <input
              type="file"
              class="d-none"
              id="file images"
              name="file[]"
              multiple=""
              value={formik.values.images}
              onChange={formik.handleChange}
            />
          </label>
        </div>
        {formik.errors.images && (
          <div className="text-danger cap-first-letter">
            {formik.errors.images}
          </div>
        )}
      </div>
      <div class="col-md-12 col-xl-12 col-lg-12 col-sm-12 col-12">
        <div class="form-group">
          <label htmlFor="description" class="font-weight-bold">
            Description
          </label>
          <textarea
            id="description"
            cols="50"
            class="sizetextarea col-md-12 col-xl-12 col-lg-12 col-sm-12 col-12"
            value={formik.values.description}
            onChange={formik.handleChange}
          ></textarea>
          {formik.errors.description && (
            <div className="text-danger cap-first-letter">
              {formik.errors.description}
            </div>
          )}
        </div>
      </div>
      <div class="col-md-12 col-xl-12 col-lg-12 col-sm-12 col-12">
        <div class="form-group">
          <button
            type="submit"
            name="submit"
            class="custom-button"
            disabled={formik.isSubmitting}
            style={{ position: "relative" }}
          >
            {formik.isSubmitting ? <LoadingCircle /> : "Update ads"}
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
      </div>
    </form>
  );
};
