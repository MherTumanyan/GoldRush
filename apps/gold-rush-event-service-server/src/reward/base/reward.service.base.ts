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
  Reward as PrismaReward,
  Bucket as PrismaBucket,
  Player as PrismaPlayer,
} from "@prisma/client";

export class RewardServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.RewardCountArgs, "select">): Promise<number> {
    return this.prisma.reward.count(args);
  }

  async rewards(args: Prisma.RewardFindManyArgs): Promise<PrismaReward[]> {
    return this.prisma.reward.findMany(args);
  }
  async reward(
    args: Prisma.RewardFindUniqueArgs
  ): Promise<PrismaReward | null> {
    return this.prisma.reward.findUnique(args);
  }
  async createReward(args: Prisma.RewardCreateArgs): Promise<PrismaReward> {
    return this.prisma.reward.create(args);
  }
  async updateReward(args: Prisma.RewardUpdateArgs): Promise<PrismaReward> {
    return this.prisma.reward.update(args);
  }
  async deleteReward(args: Prisma.RewardDeleteArgs): Promise<PrismaReward> {
    return this.prisma.reward.delete(args);
  }

  async getBucket(parentId: string): Promise<PrismaBucket | null> {
    return this.prisma.reward
      .findUnique({
        where: { id: parentId },
      })
      .bucket();
  }

  async getPlayer(parentId: string): Promise<PrismaPlayer | null> {
    return this.prisma.reward
      .findUnique({
        where: { id: parentId },
      })
      .player();
  }
}
