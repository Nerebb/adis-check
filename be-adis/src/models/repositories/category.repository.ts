import { Category } from '../entities/Category';
// import { Database } from '../../db/Database';

import dataSource from '../../../data-source';
const categoryRepository = dataSource.getRepository(Category);

// const categoryRepository = Database.getInstance().getRepository(Category);

export default categoryRepository;
