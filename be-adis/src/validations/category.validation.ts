import * as yup from 'yup';

export const createCategorySchema = yup.object({
  body: yup.object({
    category: yup.string().required(),
    icon: yup.string().required(),
  }),
});

export const updateCategorySchema = yup.object({
  body: yup.object({
    category: yup.string().notRequired(),
    icon: yup.string().notRequired(),
  }),
});

export type CreateCategorySchema = yup.InferType<
  typeof createCategorySchema
>['body'];

export type UpdateCategorySchema = yup.InferType<
  typeof updateCategorySchema
>['body'];
