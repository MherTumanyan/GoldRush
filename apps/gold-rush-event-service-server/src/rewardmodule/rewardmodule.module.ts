import { Module } from "@nestjs/common";
import { RewardModuleService } from "./rewardmodule.service";
import { RewardModuleController } from "./rewardmodule.controller";
import { RewardModuleResolver } from "./rewardmodule.resolver";

@Module({
  controllers: [RewardModuleController],
  providers: [RewardModuleService, RewardModuleResolver],
  exports: [RewardModuleService],
})
export class RewardModuleModule {}
