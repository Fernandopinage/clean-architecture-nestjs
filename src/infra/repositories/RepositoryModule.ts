import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Device } from "../database/models/Device.entity";
import DeviceRepository from "./DeviceRepository";

@Module({
  imports: [
    TypeOrmModule.forFeature([Device]),
  ],
  providers: [
    DeviceRepository
  ],
  exports: [
    DeviceRepository
  ],
})
export class RepositoryModule {}