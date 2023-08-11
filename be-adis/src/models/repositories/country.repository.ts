import { Country } from '../entities/Country';

import { Database } from '../../db/Database';

const countryRepository = Database.getInstance().getRepository(Country);

export default countryRepository;
