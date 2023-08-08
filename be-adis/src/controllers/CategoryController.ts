import { Request, Response } from "express";
import categoryRepository from "../models/repositories/category.repository";
import {
  BadRequestError,
  CreatedResponse,
  SuccessResponse,
} from "../helpers/utils";
class CategoryController {
  static createCategory = async (req: Request, res: Response) => {
    const { name_categories, icon } = req.body;

    if (!icon) {
      throw new BadRequestError("tuan");
    }
    const result = categoryRepository.create({ name_categories, icon });

    await result.save();

    await new CreatedResponse({ message: "Create Ads", data: result }).send(
      res
    );
  };

  static updateCategory = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id, 10);
    const data = req.body;

    if (!id) {
      throw new BadRequestError("Params have id");
    }

    const result = await categoryRepository.update(id, data);

    new SuccessResponse({ message: "Update Ads", data: result }).send(res);
  };

  static findAdd = async (req: Request, res: Response) => {
    const result = await categoryRepository.find();

    new SuccessResponse({ message: "find Ads", data: result }).send(res);
  };
}

export default CategoryController;
