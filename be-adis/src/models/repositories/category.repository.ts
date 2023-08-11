import { Category } from '../entities/Category';

import { Database } from '../../db/Database';

const categoryRepository = Database.getInstance().getRepository(Category);

export default categoryRepository;
