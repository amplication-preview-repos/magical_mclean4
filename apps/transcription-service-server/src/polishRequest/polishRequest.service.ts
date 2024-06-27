import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PolishRequestServiceBase } from "./base/polishRequest.service.base";

@Injectable()
export class PolishRequestService extends PolishRequestServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
