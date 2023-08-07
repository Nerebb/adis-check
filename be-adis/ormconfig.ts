import config from "./src/config";
import { DataSource } from "typeorm";

const { DB_HOST, DB_USER, DB_PASSWORD, DB_NAME } = config;

export default new DataSource({
  type: "mysql",
  host: DB_HOST,
  port: 3306,
  username: DB_USER,
  password: DB_PASSWORD,
  database: DB_NAME,
  synchronize: true,
  logging: true,
  entities: ["src/models/**/*.ts"]
});
