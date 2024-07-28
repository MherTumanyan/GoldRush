import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { RewardModuleService } from "./rewardmodule.service";
import { RewardDto } from "../rewardModule/RewardDto";

@swagger.ApiTags("rewardModules")
@common.Controller("rewardModules")
export class RewardModuleController {
  constructor(protected readonly service: RewardModuleService) {}

  @common.Post("/claim")
  @swagger.ApiOkResponse({
    type: RewardDto
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async ClaimReward(
    @common.Body()
    body: RewardDto
  ): Promise<RewardDto> {
        return this.service.ClaimReward(body);
      }
}
