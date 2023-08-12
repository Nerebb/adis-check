import { EType } from '../models/entities/Ads';
import regexUtil from '../utils/regexUtil';
import * as yup from 'yup';

export const createAdsSchema = yup.object({
  body: yup.object({
    ad_title: yup.string().max(50).required(),
    categoryId: yup.number().integer().required(),
    make: yup.string().required(),
    model: yup.number().notRequired(),
    type: yup.string().oneOf(Object.values(EType)).notRequired(),
    price: yup.number().required(),
    condition: yup.string().oneOf(['New', 'Old']).notRequired(),
    images: yup
      .array(yup.string().matches(regexUtil.URL_REGEX).required())
      .required(),
    state: yup.string().max(3).required(),
    country: yup.string().max(3).required(),
    city: yup.string().required(),
    description: yup.string().max(1000).required(),
  }),
});

export const updateAdsSchema = yup.object({
  body: yup.object({
    ad_title: yup.string().max(50).notRequired(),
    categoryId: yup.number().integer().notRequired(),
    make: yup.string().notRequired(),
    model: yup.number().notRequired(),
    type: yup.string().oneOf(Object.values(EType)).notRequired(),
    price: yup.number().notRequired(),
    condition: yup.string().oneOf(['New', 'Old']).notRequired(),
    images: yup
      .array(yup.string().matches(regexUtil.URL_REGEX).notRequired())
      .notRequired(),
    state: yup.string().max(3).notRequired(),
    country: yup.string().max(3).notRequired(),
    city: yup.string().notRequired(),
    description: yup.string().max(1000).notRequired(),
  }),
});

export const getAdsByCategorySchema = yup.object({
  query: yup.object({
    page: yup.number().integer().min(1).default(1).required(),
    limit: yup.number().integer().min(1).default(10).required(),
  }),
});

export const getAdsBySearchSchema = yup.object({
  query: yup.object({
    q: yup.string().notRequired(),
    page: yup.number().integer().min(1).default(1).required(),
    limit: yup.number().integer().min(1).default(10).required(),
  }),
});

export type CreateAdsSchema = yup.InferType<typeof createAdsSchema>['body'];
export type UpdateAdsSchema = yup.InferType<typeof updateAdsSchema>['body'];

export type GetAdsByCategorySchema = yup.InferType<
  typeof getAdsByCategorySchema
>['query'];
export type GetAdsBySearchSchema = yup.InferType<
  typeof getAdsBySearchSchema
>['query'];
