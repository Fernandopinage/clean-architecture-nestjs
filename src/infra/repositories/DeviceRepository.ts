import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Device } from '../database/models/Device.entity';

@Injectable()
export default class DeviceRepository {
  constructor(
    @InjectRepository(Device)
    private readonly repository: Repository<Device>,
  ) {}

  async findAll(): Promise<Device[]> {
    return await this.repository.find();
  }
}
