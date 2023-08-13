import { DataSource, DataSourceOptions } from 'typeorm';
import config from './src/config';

const { DB_HOST, DB_USER, DB_PASSWORD, DB_NAME, DB_PORT } = config;

export const OrmConfig: DataSourceOptions = {
  type: 'mysql',
  host: DB_HOST,
  port: DB_PORT,
  username: DB_USER,
  password: DB_PASSWORD,
  database: DB_NAME,
  synchronize: false,
  logging: true,
  entities: ['dist/src/models/entities/*.js'],
  migrations: ['dist/src/migrations/*.js'],
};

const dataSource = new DataSource(OrmConfig);

export default dataSource;
