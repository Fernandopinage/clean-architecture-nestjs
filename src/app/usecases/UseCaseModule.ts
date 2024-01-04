import { RepositoryModule } from "@/src/infra/repositories/RepositoryModule";
import { Module } from "@nestjs/common";
import ListDevicesUseCase from "./device/ListDevicesUseCase/ListDevicesUseCase";


@Module({
  providers: [
    ListDevicesUseCase,
  ],
  exports: [
    ListDevicesUseCase,
  ],
  imports: [
    RepositoryModule,
  ],
})
export class UseCaseModule {}