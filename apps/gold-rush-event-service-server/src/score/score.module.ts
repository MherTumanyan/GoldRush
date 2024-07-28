import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ScoreModuleBase } from "./base/score.module.base";
import { ScoreService } from "./score.service";
import { ScoreController } from "./score.controller";
import { ScoreResolver } from "./score.resolver";

@Module({
  imports: [ScoreModuleBase, forwardRef(() => AuthModule)],
  controllers: [ScoreController],
  providers: [ScoreService, ScoreResolver],
  exports: [ScoreService],
})
export class ScoreModule {}
