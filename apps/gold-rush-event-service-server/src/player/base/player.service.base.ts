/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";

import {
  Prisma,
  Player as PrismaPlayer,
  Reward as PrismaReward,
  Score as PrismaScore,
} from "@prisma/client";

export class PlayerServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.PlayerCountArgs, "select">): Promise<number> {
    return this.prisma.player.count(args);
  }

  async players(args: Prisma.PlayerFindManyArgs): Promise<PrismaPlayer[]> {
    return this.prisma.player.findMany(args);
  }
  async player(
    args: Prisma.PlayerFindUniqueArgs
  ): Promise<PrismaPlayer | null> {
    return this.prisma.player.findUnique(args);
  }
  async createPlayer(args: Prisma.PlayerCreateArgs): Promise<PrismaPlayer> {
    return this.prisma.player.create(args);
  }
  async updatePlayer(args: Prisma.PlayerUpdateArgs): Promise<PrismaPlayer> {
    return this.prisma.player.update(args);
  }
  async deletePlayer(args: Prisma.PlayerDeleteArgs): Promise<PrismaPlayer> {
    return this.prisma.player.delete(args);
  }

  async findRewards(
    parentId: string,
    args: Prisma.RewardFindManyArgs
  ): Promise<PrismaReward[]> {
    return this.prisma.player
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .rewards(args);
  }

  async findScores(
    parentId: string,
    args: Prisma.ScoreFindManyArgs
  ): Promise<PrismaScore[]> {
    return this.prisma.player
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .scores(args);
  }
}
