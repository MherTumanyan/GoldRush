import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { ScoreModuleService } from "./scoremodule.service";
import { ScoreDto } from "../scoreModule/ScoreDto";

@swagger.ApiTags("scoreModules")
@common.Controller("scoreModules")
export class ScoreModuleController {
  constructor(protected readonly service: ScoreModuleService) {}

  @common.Post("/report")
  @swagger.ApiOkResponse({
    type: ScoreDto
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async ScoreReporting(
    @common.Body()
    body: ScoreDto
  ): Promise<ScoreDto> {
        return this.service.ScoreReporting(body);
      }
}
