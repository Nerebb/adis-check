import { Ads } from '../models/entities/Ads';
import adsRepository from '../models/repositories/ads.repository';
import { BaseService } from './base.service';
import { Repository } from 'typeorm';

class AdsService extends BaseService<Ads, Repository<Ads>> {
  constructor() {
    super(adsRepository);
  }
}

export default new AdsService();
