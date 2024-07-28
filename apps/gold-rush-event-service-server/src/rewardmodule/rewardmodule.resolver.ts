import * as graphql from "@nestjs/graphql";
import { RewardDto } from "../rewardModule/RewardDto";
import { RewardModuleService } from "./rewardmodule.service";

export class RewardModuleResolver {
  constructor(protected readonly service: RewardModuleService) {}

  @graphql.Mutation(() => RewardDto)
  async ClaimReward(
    @graphql.Args()
    args: RewardDto
  ): Promise<RewardDto> {
    return this.service.ClaimReward(args);
  }
}
