import { State } from '../entities/State';

import dataSource from '../../../data-source';

const stateRepository = dataSource.getRepository(State);

// const stateRepository = Database.getInstance().getRepository(State);

export default stateRepository;
