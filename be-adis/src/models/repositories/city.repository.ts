import { City } from '../entities/City';
// import { Database } from '../../db/Database';

import dataSource from '../../../data-source';
const cityRepository = dataSource.getRepository(City);

// const cityRepository = Database.getInstance().getRepository(City);

export default cityRepository;
