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
      category_name: category.category,
      ...(req.body as Ads),
    });
    await ads.save();

    // todo send email
    new CreatedResponse({
      message:
        'Create Ads success,We will review the valid ads and confirm the fastest',
      data: ads,
    }).send(res);
  };

  static updateAds = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id, 10);
    const data = req.body;
    if (!id) {
      throw new BadRequestError('Params have id');
    }

    const result = await adsRepository.update(id, {
      ...data,
      isValid: false,
      status: EStatus.pending,
    });

    // todo send email
    new SuccessResponse({
      message:
        'Update Ads success, We will review the valid ads and confirm the fastest',
      data: result,
    }).send(res);
  };

  static findByCategory = async (req: Request, res: Response) => {
    const categoryId = parseInt(req.params.id as string, 10);

    const page = parseInt(req.query.page as string, 10) || 1;
    const limit = parseInt(req.query.limit as string, 10) || 20;

    if (!categoryId) new BadRequestError('Params must have Id');

    if (limit > 50) {
      throw new BadRequestError('Limit less than 40');
    }

    const result = await adsRepository.findAndCount({
      where: { categoryId, status: EStatus.active },
      skip: (page - 1) * limit,
      take: limit,
    });

    new SuccessResponse({ message: 'find Ads', data: result }).send(res);
  };

  static findByKeyword = async (req: Request, res: Response) => {
    const searchTitle = req.query.q || '';
    const categoryId = parseInt(req.query.categoryId as string, 10);

    const page = parseInt(req.query.page as string, 10) || 1;
    const limit = parseInt(req.query.limit as string, 10) || 20;

    if (categoryId !== 0) {
      if (searchTitle) {
        const result = await adsRepository.findAndCount({
          where: {
            ad_title: Like(`%${searchTitle}%`),
            status: EStatus.active,
            categoryId,
          },
          skip: (page - 1) * limit,
          take: limit,
        });

        new SuccessResponse({ message: 'find Ads', data: result }).send(res);
      } else {
        const result = await adsRepository.findAndCount({
          where: { categoryId, status: EStatus.active },
          skip: (page - 1) * limit,
          take: limit,
        });
        new SuccessResponse({ message: 'find Ads', data: result }).send(res);
      }
    } else {
      if (searchTitle) {
        console.log(searchTitle);
        const result = await adsRepository.findAndCount({
          where: {
            ad_title: Like(`%${searchTitle}%`),
            status: EStatus.active,
          },
          skip: (page - 1) * limit,
          take: limit,
        });

        new SuccessResponse({ message: 'find Ads', data: result }).send(res);
      } else {
        console.log(searchTitle);
        const result = await adsRepository.findAndCount({
          where: { status: EStatus.active },
          skip: (page - 1) * limit,
          take: limit,
        });
        new SuccessResponse({ message: 'find Ads', data: result }).send(res);
      }
    }
  };

  static detail = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id, 10);

    if (!id) throw new BadRequestError('Must have id');

    const adsDb = await adsRepository.findOne({
      where: { id, status: EStatus.active },
      relations: { user: true },
    });

    adsDb.view += 1;

    await adsDb.save();

    adsDb.user.password = '';

    new SuccessResponse({ message: 'Find detail Ads', data: adsDb }).send(res);
  };

  static updateStatus = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id, 10);
    const { status } = req.body;

    if (!id) throw new BadRequestError('must have id');

    if (status !== EStatus.active && status !== EStatus.shutOff)
      throw new BadRequestError('Request invalidate');

    const result = await adsRepository.update(
      { isValid: true },
      {
        status,
      }
    );

    new SuccessResponse({ message: 'Update Ads', data: result }).send(res);
  };

  static getByAdvertiser = async (req: Request, res: Response) => {
    const q = req.query.q;
    const page = parseInt(req.query.page as string, 10) || 1;
    const limit = parseInt(req.query.limit as string, 10) || 20;

    const { id } = res.locals.userId;
    let result: [Ads[], number] | null = null;
    if (q) {
      result = await adsRepository.findAndCount({
        where: { userId: id, ad_title: Like(`%${q}%`) },
        skip: (page - 1) * limit,
        take: limit,
      });
    } else {
      result = await adsRepository.findAndCount({
        where: { userId: id },
        skip: (page - 1) * limit,
        take: limit,
      });
    }

    new SuccessResponse({ message: 'Get my Ads', data: result }).send(res);
  };

  static updateStatusByAdmin = async (req: Request, res: Response) => {
    const status = req.query.status as string;
    const categoryId = req.query.categoryId as string;

    if (status !== EStatus.active && status !== EStatus.decline) {
      throw new BadRequestError('Request invalidate');
    }

    const result = await adsRepository.update(categoryId, {
      status,
      isValid: true,
    });

    // todo send email
    new SuccessResponse({
      message: 'Update status Success',
      data: result,
    }).send(res);
  };
}

export default AdsController;
