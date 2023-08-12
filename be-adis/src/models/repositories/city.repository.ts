import { City } from '../entities/City';

import { Database } from '../../db/Database';

const cityRepository = Database.getInstance().getRepository(City);

export default cityRepository;
