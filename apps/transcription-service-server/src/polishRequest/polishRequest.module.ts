import { Module } from "@nestjs/common";
import { PolishRequestModuleBase } from "./base/polishRequest.module.base";
import { PolishRequestService } from "./polishRequest.service";
import { PolishRequestController } from "./polishRequest.controller";
import { PolishRequestResolver } from "./polishRequest.resolver";

@Module({
  imports: [PolishRequestModuleBase],
  controllers: [PolishRequestController],
  providers: [PolishRequestService, PolishRequestResolver],
  exports: [PolishRequestService],
})
export class PolishRequestModule {}
