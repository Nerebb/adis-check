import { Country } from '../entities/Country';
// import { Database } from '../../db/Database';

import dataSource from '../../../data-source';
const countryRepository = dataSource.getRepository(Country);

// const countryRepository = Database.getInstance().getRepository(Country);

export default countryRepository;
