import { Ads, EStatus } from '../models/entities/Ads';
import {
  BadRequestError,
  CreatedResponse,
  NotFoundError,
  SuccessResponse,
} from '../helpers/utils';
import adsRepository from '../models/repositories/ads.repository';
import { Request, Response } from 'express';
import categoryRepository from '../models/repositories/category.repository';
import { Like } from 'typeorm';

class AdsController {
  static createAds = async (req: Request, res: Response) => {
    const { categoryId } = req.body;
    const userId = res.locals.user.userId;

    if (!categoryId) throw new BadRequestError('Must have categoryId');

    const category = await categoryRepository.findOne({
      where: { id: categoryId },
    });

    if (!category) throw new NotFoundError('Not found category');

    const ads = adsRepository.create({
      userId,
      ...(req.body as Ads),
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
    const categoryId = parseInt(req.params.id as string, 10);

    const page = parseInt(req.query.page as string, 10) || 1;
    const limit = parseInt(req.query.limit as string, 10) || 20;

    if (!categoryId) new BadRequestError('Params must have Id');

    if (limit > 50) {
      throw new BadRequestError('Limit less than 40');
    }

    const result = await adsRepository.find({
      where: { categoryId, status: EStatus.active },
      skip: (page - 1) * limit,
      take: limit,
    });

    new SuccessResponse({ message: 'find Ads', data: result }).send(res);
  };

  static findByKeyword = async (req: Request, res: Response) => {
    const searchTitle = req.query.q || '';

    const page = parseInt(req.query.page as string, 10) || 1;
    const limit = parseInt(req.query.limit as string, 10) || 20;

    if (searchTitle) {
      console.log(searchTitle);
      const result = await adsRepository.find({
        where: {
          ad_title: Like(`%${searchTitle}%`),
          status: EStatus.active,
        },
        skip: (page - 1) * limit,
        take: limit,
      });

      new SuccessResponse({ message: 'find Ads', data: result }).send(res);
    } else {
      const result = await adsRepository.find();
      new SuccessResponse({ message: 'find Ads', data: result }).send(res);
    }
  };

  static detail = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id, 10);

    if (!id) throw new BadRequestError('must have id');

    const adsDb = await adsRepository.findOne({
      where: { id, status: EStatus.active },
      relations: { user: true },
    });

    adsDb.view += 1;

    await adsDb.save();

    adsDb.user.password = '';

    new SuccessResponse({ message: 'find Ads', data: adsDb }).send(res);
  };

  static updateStatus = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id, 10);
    const { status } = req.body;

    if (!id) throw new BadRequestError('must have id');

    if (
      status !== EStatus.active ||
      status !== EStatus.pending ||
      status !== EStatus.shutOff
    )
      throw new BadRequestError('Request invalidate');

    const result = await adsRepository.update(id, {
      status,
    });

    new SuccessResponse({ message: 'find Ads', data: result }).send(res);
  };

  getByAdvertiser = async (req: Request, res: Response) => {
    const page = parseInt(req.query.page as string, 10) || 1;
    const limit = parseInt(req.query.limit as string, 10) || 20;
  };
}
export default AdsController;
