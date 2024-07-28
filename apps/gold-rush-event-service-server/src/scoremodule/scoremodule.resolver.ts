import * as graphql from "@nestjs/graphql";
import { ScoreDto } from "../scoreModule/ScoreDto";
import { ScoreModuleService } from "./scoremodule.service";

export class ScoreModuleResolver {
  constructor(protected readonly service: ScoreModuleService) {}

  @graphql.Mutation(() => ScoreDto)
  async ScoreReporting(
    @graphql.Args()
    args: ScoreDto
  ): Promise<ScoreDto> {
    return this.service.ScoreReporting(args);
  }
}
