import { DataSource } from "typeorm"
import "dotenv/config"
/*import { User } from "./entities/user.entity"*/
const nodeEnv = process.env.NODE_ENV

const AppDataSource = new DataSource(
  nodeEnv === "production"
    ? {
        type: "postgres",
        url: process.env.DATABASE_URL,
        entities: ["src/entities/*.{js,ts}"],
        migrations: ["src/migrations/*.{js,ts}"],
      }
    : {
        type: "postgres",
        host: process.env.DB_HOST,
        port: 5432,
        username: process.env.POSTGRES_USER,
        password: process.env.POSTGRES_PASSWORD,
        database: process.env.POSTGRES_DB,
        logging: true,
        synchronize: false,
        entities: ["src/entities/*.ts"],
        migrations: ["src/migrations/*.ts"],
      }
)

export default AppDataSource
