import * as dotenv from 'dotenv';
import { DataSource } from 'typeorm';
dotenv.config();

const config = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT, 10),
  username: process.env.DB_USER,
  password: `${process.env.DB_PWD}`,
  database: process.env.DB_NAME,
  entities: ['./src/infra/database/models/*.entity.ts'],
  migrations: ["./src/infra/database/migrations/*.ts"],
});

export default config;
