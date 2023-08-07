import dotenv from 'dotenv';

dotenv.config();

export default {
  PORT: process.env.PORT ?? '3000',
  DB_HOST: process.env.MYSQL_HOST ?? 'localhost',
  DB_USER: process.env.MYSQL_USER ?? 'root',
  DB_PASSWORD: process.env.MYSQL_PASSWORD ?? '',
  DB_NAME: process.env.MYSQL_DATABASE ?? ''
};