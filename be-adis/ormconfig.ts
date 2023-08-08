import config from "./src/config";
import { DataSource } from "typeorm";

const { DB_HOST, DB_USER, DB_PASSWORD, DB_NAME, DB_PORT } = config;

export default new DataSource({
  type: "mysql",
  host: DB_HOST,
  port: DB_PORT,
  username: DB_USER,
  password: DB_PASSWORD,
  database: DB_NAME,
  synchronize: true,
  logging: true,
  migrations: [],
  entities: ["src/models/**/*.ts"],
});
