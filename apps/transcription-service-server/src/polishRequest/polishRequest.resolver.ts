import * as graphql from "@nestjs/graphql";
import { PolishRequestResolverBase } from "./base/polishRequest.resolver.base";
import { PolishRequest } from "./base/PolishRequest";
import { PolishRequestService } from "./polishRequest.service";

@graphql.Resolver(() => PolishRequest)
export class PolishRequestResolver extends PolishRequestResolverBase {
  constructor(protected readonly service: PolishRequestService) {
    super(service);
  }
}
