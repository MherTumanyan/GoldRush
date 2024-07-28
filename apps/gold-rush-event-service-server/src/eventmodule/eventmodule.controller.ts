import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { EventModuleService } from "./eventmodule.service";
import { EventDto } from "../eventModule/EventDto";

@swagger.ApiTags("eventModules")
@common.Controller("eventModules")
export class EventModuleController {
  constructor(protected readonly service: EventModuleService) {}

  @common.Get("/event")
  @swagger.ApiOkResponse({
    type: EventDto
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async GetEvent(
    @common.Body()
    body: string
  ): Promise<EventDto> {
        return this.service.GetEvent(body);
      }
}
