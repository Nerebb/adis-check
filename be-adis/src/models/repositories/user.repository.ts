import { Database } from '../../db/Database';
import { User } from '../entities/User';

export const userRepository = Database.getInstance().getRepository(User);
