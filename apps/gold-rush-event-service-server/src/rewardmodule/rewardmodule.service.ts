import { Injectable } from "@nestjs/common";
import { RewardDto } from "../rewardModule/RewardDto";

@Injectable()
export class RewardModuleService {
  constructor() {}
  async ClaimReward(args: RewardDto): Promise<RewardDto> {
    throw new Error("Not implemented");
  }
}
