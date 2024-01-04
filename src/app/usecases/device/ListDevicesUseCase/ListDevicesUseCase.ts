import StatusCode from '@/src/app/status/statusCode';
import DeviceRepository from '@/src/infra/repositories/DeviceRepository';
import { Injectable } from '@nestjs/common';
import { BaseUseCaseTemplate } from '../../BaseUseCaseTemplate';
import { ListDevicesResponse } from './ListDevicesDto';
import e = require('express');

@Injectable()
export default class ListDevicesUseCase extends BaseUseCaseTemplate<void, ListDevicesResponse> {
  constructor(private deviceRepository: DeviceRepository) {
    super();
  }
  protected async process() {
    const result = await this.deviceRepository.findAll();

    this.setResponseBody({
      devices:result.map(e=>{
        return {
        id: e.id,
        imei: e.imei,
        latitude: e.latitude,
        longitude: e.longitude,
        gsmSignal: e.gsmSignal,
        batteryPercentage: e.batteryPercentage,
        createdAt: e.createdAt,
        updatedAt:e.updatedAt
    }})
    });

    this.setResponseStatusCode(StatusCode.ok);
  }

}
