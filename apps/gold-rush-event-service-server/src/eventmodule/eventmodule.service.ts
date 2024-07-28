import { Injectable } from "@nestjs/common";
import { EventDto } from "../eventModule/EventDto";

@Injectable()
export class EventModuleService {
  constructor() {}
  async GetEvent(args: string): Promise<EventDto> {
    throw new Error("Not implemented");
  }
}
