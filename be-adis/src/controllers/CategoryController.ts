import { Request, Response } from 'express';
import categoryRepository from '../models/repositories/category.repository';
import {
  BadRequestError,
  CreatedResponse,
  SuccessResponse,
} from '../helpers/utils';
class CategoryController {
  static createCategory = async (req: Request, res: Response) => {
    const { category, icon } = req.body;

    const result = categoryRepository.create({ category, icon });

    await result.save();

    new CreatedResponse({ message: 'Create Ads', data: result }).send(res);
  };

  static updateCategory = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id, 10);
    const data = req.body;

    if (!id) {
      throw new BadRequestError('Params have id');
    }

    const result = await categoryRepository.update(id, data);

    new SuccessResponse({ message: 'Update Ads', data: result }).send(res);
  };

  static findAdd = async (req: Request, res: Response) => {
    const result = await categoryRepository.find();

    new SuccessResponse({ message: 'Find Ads', data: result }).send(res);
  };
}

export default CategoryController;
