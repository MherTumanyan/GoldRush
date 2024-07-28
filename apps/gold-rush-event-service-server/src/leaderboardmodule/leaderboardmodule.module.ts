import { Module } from "@nestjs/common";
import { LeaderboardModuleService } from "./leaderboardmodule.service";
import { LeaderboardModuleController } from "./leaderboardmodule.controller";
import { LeaderboardModuleResolver } from "./leaderboardmodule.resolver";

@Module({
  controllers: [LeaderboardModuleController],
  providers: [LeaderboardModuleService, LeaderboardModuleResolver],
  exports: [LeaderboardModuleService],
})
export class LeaderboardModuleModule {}
