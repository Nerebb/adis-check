import { Ads } from '../entities/Ads';

import { Database } from '../../db/Database';

const adsRepository = Database.getInstance().getRepository(Ads);

export default adsRepository;
