import ListDevicesUseCase from '@/src/app/usecases/device/ListDevicesUseCase/ListDevicesUseCase';
import { Controller, Get, Res } from '@nestjs/common';
import { Response } from 'express';

@Controller('devices')
export default class DevicesController {
  constructor(
    private listDevicesUseCase: ListDevicesUseCase
  ) {}
  
  @Get()
  async findAll(@Res() res: Response){
    const response = await this.listDevicesUseCase.execute({});
    res.status(response.statusCode);
    res.json(response.body);
  }  
}
