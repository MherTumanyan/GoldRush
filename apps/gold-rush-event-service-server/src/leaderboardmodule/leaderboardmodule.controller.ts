import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { LeaderboardModuleService } from "./leaderboardmodule.service";
import { LeaderboardEntryDto } from "../leaderboardModule/LeaderboardEntryDto";

@swagger.ApiTags("leaderboardModules")
@common.Controller("leaderboardModules")
export class LeaderboardModuleController {
  constructor(protected readonly service: LeaderboardModuleService) {}

  @common.Get("/leaderboard")
  @swagger.ApiOkResponse({
    type: LeaderboardEntryDto
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async GetLeaderboard(
    @common.Body()
    body: string
  ): Promise<LeaderboardEntryDto[]> {
        return this.service.GetLeaderboard(body);
      }
}
