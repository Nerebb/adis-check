import * as yup from "yup";
import { URL_REGEX } from "../utils/regexUtil";

const allowedTypes = ["sport", "Manual", "Sports"];
const allowedConditions = ["New", "Old"];

export const createAdsSchema = yup.object({
  ad_title: yup
    .string()
    .max(50, "Title must lesser than 50 character")
    .required("Title is required"),
  categoryId: yup.number().integer().required(),
  make: yup.string().required(),
  model: yup.number().notRequired(),
  type: yup.string().oneOf(Object.values(allowedTypes)).notRequired(),
  price: yup.number().required(),
  condition: yup.string().oneOf(allowedConditions).notRequired(),
  images: yup.array(yup.string().matches(URL_REGEX).required()).required(),
  state: yup.string().required(),
  country: yup.string().required(),
  city: yup.string().required(),
  description: yup.string().max(1000).required(),
});
