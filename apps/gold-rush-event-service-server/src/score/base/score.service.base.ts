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
  Score as PrismaScore,
  Bucket as PrismaBucket,
  Player as PrismaPlayer,
} from "@prisma/client";

export class ScoreServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.ScoreCountArgs, "select">): Promise<number> {
    return this.prisma.score.count(args);
  }

  async scores(args: Prisma.ScoreFindManyArgs): Promise<PrismaScore[]> {
    return this.prisma.score.findMany(args);
  }
  async score(args: Prisma.ScoreFindUniqueArgs): Promise<PrismaScore | null> {
    return this.prisma.score.findUnique(args);
  }
  async createScore(args: Prisma.ScoreCreateArgs): Promise<PrismaScore> {
    return this.prisma.score.create(args);
  }
  async updateScore(args: Prisma.ScoreUpdateArgs): Promise<PrismaScore> {
    return this.prisma.score.update(args);
  }
  async deleteScore(args: Prisma.ScoreDeleteArgs): Promise<PrismaScore> {
    return this.prisma.score.delete(args);
  }

  async getBucket(parentId: string): Promise<PrismaBucket | null> {
    return this.prisma.score
      .findUnique({
        where: { id: parentId },
      })
      .bucket();
  }

  async getPlayer(parentId: string): Promise<PrismaPlayer | null> {
    return this.prisma.score
      .findUnique({
        where: { id: parentId },
      })
      .player();
  }
}
