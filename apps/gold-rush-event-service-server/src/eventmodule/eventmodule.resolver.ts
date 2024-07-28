import * as graphql from "@nestjs/graphql";
import { EventDto } from "../eventModule/EventDto";
import { EventModuleService } from "./eventmodule.service";

export class EventModuleResolver {
  constructor(protected readonly service: EventModuleService) {}

  @graphql.Query(() => EventDto)
  async GetEvent(
    @graphql.Args("args")
    args: string
  ): Promise<EventDto> {
    return this.service.GetEvent(args);
  }
}
