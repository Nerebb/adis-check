import dataSource from '../../../data-source';
import { Ads } from '../entities/Ads';

// import { Database } from '../../db/Database';

// const adsRepository = Database.getInstance().getRepository(Ads);

const adsRepository = dataSource.getRepository(Ads);

export default adsRepository;
