import { Repository } from 'typeorm';
import { Category } from '../models/entities/Category';
import categoryRepository from '../models/repositories/category.repository';
import { BaseService } from './base.service';

class CategoryService extends BaseService<Category, Repository<Category>> {
  constructor() {
    super(categoryRepository);
  }
}

export default new CategoryService();
