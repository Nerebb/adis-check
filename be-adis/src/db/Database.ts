import { User } from '../models/entities/User';
import config from '../config';
import { DataSource } from 'typeorm';

export class Database {
  private static instance: DataSource;

  private constructor() {}

  public static getInstance(): DataSource {
    if (!Database.instance) {
      const { DB_HOST, DB_USER, DB_PASSWORD, DB_NAME, DB_PORT } = config;
      Database.instance = new DataSource({
        type: 'mysql',
        host: DB_HOST,
        port: DB_PORT,
        username: DB_USER,
        password: DB_PASSWORD,
        database: DB_NAME,
        synchronize: true,
        logging: true,
        migrations: [],
        entities: [User],
      });
    }

    return Database.instance;
  }
}
