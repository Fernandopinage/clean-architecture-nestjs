import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as path from 'path';
import { UseCaseModule } from './app/usecases/UseCaseModule';
import DevicesController from './infra/controller/DevicesController';
import config from './infra/database/config/config';


@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: [path.resolve(__dirname, '.env')],
    }),
    TypeOrmModule.forRoot(config),
    UseCaseModule, 
  ],
  controllers: [DevicesController],
})
export class AppModule {}
