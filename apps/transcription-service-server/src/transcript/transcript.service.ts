import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TranscriptServiceBase } from "./base/transcript.service.base";

@Injectable()
export class TranscriptService extends TranscriptServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
