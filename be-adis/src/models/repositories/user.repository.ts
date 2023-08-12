// import { Database } from '../../db/Database';
import { User } from '../entities/User';

import dataSource from '../../../data-source';

export const userRepository = dataSource.getRepository(User);

// export const userRepository = Database.getInstance().getRepository(User);

export default userRepository;
