import dotenv from "dotenv";

dotenv.config();

export default {
  PORT: process.env.PORT ?? "3000",
  DB_HOST: process.env.MYSQL_HOST ?? "localhost",
  DB_USER: process.env.MYSQL_USER ?? "root",
  DB_PASSWORD: process.env.MYSQL_PASSWORD ?? "",
  DB_NAME: process.env.MYSQL_DATABASE ?? "",
  DB_PORT:  process.env.MYSQL_PORT ? parseInt(process.env.MYSQL_PORT) : 3306 as number,
  AUTH: {
    jwtSecret: process.env.JWT_SECRET ?? 'secret'
  }
};
