import { Injectable } from "@nestjs/common";
import { LeaderboardEntryDto } from "../leaderboardModule/LeaderboardEntryDto";

@Injectable()
export class LeaderboardModuleService {
  constructor() {}
  async GetLeaderboard(args: string): Promise<LeaderboardEntryDto[]> {
    throw new Error("Not implemented");
  }
}
