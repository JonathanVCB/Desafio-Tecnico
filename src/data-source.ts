import "reflect-metadata";
import "dotenv/config";
import { DataSourceOptions, DataSource } from "typeorm";
import { User, Place, Point, Polygon } from "./entities";
import { initial1684597421370 } from "./migrations/1684597421370-initial";
import { addgeojson1684715611417 } from "./migrations/1684715611417-addgeojson";
import { addpolygons1684771343276 } from "./migrations/1684771343276-addpolygons";

const DataSourceSettings = (): DataSourceOptions => {
  const entities = [User, Place, Point, Polygon];
  const migrations = [
    initial1684597421370,
    addgeojson1684715611417,
    addpolygons1684771343276,
  ];

  const node_env = process.env.NODE_ENV;

  if (node_env === "production") {
    return {
      type: "postgres",
      url: process.env.DATABASE_URL,
      entities,
      migrations,
    };
  } else if (node_env === "test") {
    return {
      type: "sqlite",
      database: ":memory:",
      entities,
      migrations,
      synchronize: true,
    };
  }

  return {
    type: "postgres",
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    port: +process.env.DB_PORT,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    synchronize: false,
    logging: true,
    entities,
    migrations,
  };
};

const dataSource = DataSourceSettings();
const appDataSource = new DataSource(dataSource);

export default appDataSource;
