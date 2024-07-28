import * as graphql from "@nestjs/graphql";
import { LeaderboardEntryDto } from "../leaderboardModule/LeaderboardEntryDto";
import { LeaderboardModuleService } from "./leaderboardmodule.service";

export class LeaderboardModuleResolver {
  constructor(protected readonly service: LeaderboardModuleService) {}

  @graphql.Query(() => [LeaderboardEntryDto])
  async GetLeaderboard(
    @graphql.Args("args")
    args: string
  ): Promise<LeaderboardEntryDto[]> {
    return this.service.GetLeaderboard(args);
  }
}
