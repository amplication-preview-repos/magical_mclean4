import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { TranscriptService } from "./transcript.service";
import { TranscriptControllerBase } from "./base/transcript.controller.base";

@swagger.ApiTags("transcripts")
@common.Controller("transcripts")
export class TranscriptController extends TranscriptControllerBase {
  constructor(protected readonly service: TranscriptService) {
    super(service);
  }
}
