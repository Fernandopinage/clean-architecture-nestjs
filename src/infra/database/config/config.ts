import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import * as dotenv from 'dotenv';
import { join } from 'path';
dotenv.config();

const config: TypeOrmModuleOptions = {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT, 10),
  username: process.env.DB_USER,
  password: `${process.env.DB_PWD}`,
  database: process.env.DB_NAME,
  entities: [join(__dirname, '../models/*.entity{.ts,.js}')],
};

export default config;
