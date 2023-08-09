import { Ads } from '../models/entities/Ads';
import {
  BadRequestError,
  CreatedResponse,
  NotFoundError,
  SuccessResponse,
} from '../helpers/utils';
import adsRepository from '../models/repositories/ads.repository';
import { Request, Response } from 'express';
import categoryRepository from '../models/repositories/category.repository';

class AdsController {
  static createAds = async (req: Request, res: Response) => {
    const { categoryId, ...other } = req.body;
    const userId = res.locals.user.userId;

    if (!categoryId) throw new BadRequestError('Must have categoryId');

    const category = await categoryRepository.findOne({
      where: { id: categoryId },
    });

    if (!category) throw new NotFoundError('Not found category');

    const ads = adsRepository.create({
      userId,
      categoryId,
      ...category,
      ...(other as Ads),
    });

    await ads.save();

    new CreatedResponse({ message: 'Create Ads', data: ads }).send(res);
  };

  static updateAds = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id, 10);
    const data = req.body;

    if (!id) {
      throw new BadRequestError('Params have id');
    }

    const result = await adsRepository.update(id, data);

    new SuccessResponse({ message: 'Update Ads', data: result }).send(res);
  };

  static findByCategory = async (req: Request, res: Response) => {
    const categoryId = parseInt(req.query.id as string, 10);

    const page = parseInt(req.query.page as string, 10) || 1;
    const limit = parseInt(req.query.limit as string, 10) || 20;

    if (limit > 50) {
      throw new BadRequestError('Limit greater than 40');
    }

    const result = await adsRepository.find({
      where: { categoryId },
      skip: (page - 1) * limit,
      take: limit,
    });

    new SuccessResponse({ message: 'find Ads', data: result }).send(res);
  };

  static findByKeyword = async (req: Request, res: Response) => {
    const searchTitle = req.query.q;

    const page = parseInt(req.query.page as string, 10) || 1;
    const limit = parseInt(req.query.limit as string, 10) || 20;

    const result = await adsRepository
      .createQueryBuilder()
      .select('*')
      .where(`MATCH(ad_title) AGAINST ('${searchTitle}' IN BOOLEAN MODE)`)
      .orWhere(`MATCH(make) AGAINST ('${searchTitle}' IN BOOLEAN MODE)`)
      .skip((page - 1) * limit)
      .take(limit)
      .getMany();

    new SuccessResponse({ message: 'find Ads', data: result }).send(res);
  };
}

export default AdsController;
