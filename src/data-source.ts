import { DataSource } from "typeorm"
import "dotenv/config"
import path from "path";

const setDataSourceConfig = (): any => {
  const entitiesPath: string = path.join(__dirname, "./entities/**.{js,ts}");
  const migrationsPath: string = path.join(
    __dirname,
    "./migrations/**.{js,ts}"
  );


const nodeEnv = process.env.NODE_ENV;

  if(nodeEnv === "production"){
    return {
      type: "postgres",
      url: process.env.DATABASE_URL,
      entities: [entitiesPath],
      migrations: [migrationsPath],
    }
  }

  if (nodeEnv === "test") {
    return {
      type: "sqlite",
      database: ":memory:",
      synchronize: true,
      entities: [entitiesPath],
    };
  }

  return {
    type: "postgres",
    host: process.env.HOST,
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PWD,
    port: 5432,
    database: process.env.POSTGRES_DB,
    synchronize: false,
    logging: true,
    entities: [entitiesPath],
    migrations: [migrationsPath],
  };
};