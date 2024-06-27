import { Module } from "@nestjs/common";
import { TranscriptModuleBase } from "./base/transcript.module.base";
import { TranscriptService } from "./transcript.service";
import { TranscriptController } from "./transcript.controller";
import { TranscriptResolver } from "./transcript.resolver";

@Module({
  imports: [TranscriptModuleBase],
  controllers: [TranscriptController],
  providers: [TranscriptService, TranscriptResolver],
  exports: [TranscriptService],
})
export class TranscriptModule {}
