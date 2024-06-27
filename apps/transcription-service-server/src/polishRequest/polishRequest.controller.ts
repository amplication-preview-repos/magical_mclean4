import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { PolishRequestService } from "./polishRequest.service";
import { PolishRequestControllerBase } from "./base/polishRequest.controller.base";

@swagger.ApiTags("polishRequests")
@common.Controller("polishRequests")
export class PolishRequestController extends PolishRequestControllerBase {
  constructor(protected readonly service: PolishRequestService) {
    super(service);
  }
}
