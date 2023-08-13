import dotenv from 'dotenv';

dotenv.config();

export default {
  PORT: process.env.PORT ?? '3000',
  DB_HOST: process.env.MYSQL_HOST ?? 'localhost',
  DB_USER: process.env.MYSQL_USER ?? 'root',
  DB_PASSWORD: process.env.MYSQL_PASSWORD ?? '',
  DB_NAME: process.env.MYSQL_DATABASE ?? '',
  DB_PORT: process.env.MYSQL_PORT
    ? parseInt(process.env.MYSQL_PORT)
    : (3306 as number),
  AUTH: {
    jwtSecret: process.env.JWT_SECRET ?? 'secret',
  },
  REGISTER: {
    CONFIRMATION_EMAIL: process.env.CONFIRMATION_EMAIL
      ? parseInt(process.env.CONFIRMATION_EMAIL)
      : false,
  },
  SG_API_KEY: process.env.SG_API_KEY ?? '',
  SG_SENDER: process.env.SG_SENDER ?? 'trunghieu186@gmail.com',
  MAILGUN_API_KEY: process.env.MAILGUN_API_KEY ?? 'dd94d44c89ff1f6a62f4f1702a78d373-28e9457d-e84337f1',
  MG_DOMAIN: 'sandbox13cf97c51ec34d448226f32fed8fd59f.mailgun.org'
};
