import { State } from '../entities/State';

import { Database } from '../../db/Database';

const stateRepository = Database.getInstance().getRepository(State);

export default stateRepository;
