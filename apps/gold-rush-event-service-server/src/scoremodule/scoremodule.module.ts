import { Module } from "@nestjs/common";
import { ScoreModuleService } from "./scoremodule.service";
import { ScoreModuleController } from "./scoremodule.controller";
import { ScoreModuleResolver } from "./scoremodule.resolver";

@Module({
  controllers: [ScoreModuleController],
  providers: [ScoreModuleService, ScoreModuleResolver],
  exports: [ScoreModuleService],
})
export class ScoreModuleModule {}
