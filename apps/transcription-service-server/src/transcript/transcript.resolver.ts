import * as graphql from "@nestjs/graphql";
import { TranscriptResolverBase } from "./base/transcript.resolver.base";
import { Transcript } from "./base/Transcript";
import { TranscriptService } from "./transcript.service";

@graphql.Resolver(() => Transcript)
export class TranscriptResolver extends TranscriptResolverBase {
  constructor(protected readonly service: TranscriptService) {
    super(service);
  }
}
