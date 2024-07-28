/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { Score } from "./Score";
import { ScoreCountArgs } from "./ScoreCountArgs";
import { ScoreFindManyArgs } from "./ScoreFindManyArgs";
import { ScoreFindUniqueArgs } from "./ScoreFindUniqueArgs";
import { CreateScoreArgs } from "./CreateScoreArgs";
import { UpdateScoreArgs } from "./UpdateScoreArgs";
import { DeleteScoreArgs } from "./DeleteScoreArgs";
import { Bucket } from "../../bucket/base/Bucket";
import { Player } from "../../player/base/Player";
import { ScoreService } from "../score.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Score)
export class ScoreResolverBase {
  constructor(
    protected readonly service: ScoreService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Score",
    action: "read",
    possession: "any",
  })
  async _scoresMeta(
    @graphql.Args() args: ScoreCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Score])
  @nestAccessControl.UseRoles({
    resource: "Score",
    action: "read",
    possession: "any",
  })
  async scores(@graphql.Args() args: ScoreFindManyArgs): Promise<Score[]> {
    return this.service.scores(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Score, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Score",
    action: "read",
    possession: "own",
  })
  async score(
    @graphql.Args() args: ScoreFindUniqueArgs
  ): Promise<Score | null> {
    const result = await this.service.score(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Score)
  @nestAccessControl.UseRoles({
    resource: "Score",
    action: "create",
    possession: "any",
  })
  async createScore(@graphql.Args() args: CreateScoreArgs): Promise<Score> {
    return await this.service.createScore({
      ...args,
      data: {
        ...args.data,

        bucket: args.data.bucket
          ? {
              connect: args.data.bucket,
            }
          : undefined,

        player: args.data.player
          ? {
              connect: args.data.player,
            }
          : undefined,
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Score)
  @nestAccessControl.UseRoles({
    resource: "Score",
    action: "update",
    possession: "any",
  })
  async updateScore(
    @graphql.Args() args: UpdateScoreArgs
  ): Promise<Score | null> {
    try {
      return await this.service.updateScore({
        ...args,
        data: {
          ...args.data,

          bucket: args.data.bucket
            ? {
                connect: args.data.bucket,
              }
            : undefined,

          player: args.data.player
            ? {
                connect: args.data.player,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Score)
  @nestAccessControl.UseRoles({
    resource: "Score",
    action: "delete",
    possession: "any",
  })
  async deleteScore(
    @graphql.Args() args: DeleteScoreArgs
  ): Promise<Score | null> {
    try {
      return await this.service.deleteScore(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => Bucket, {
    nullable: true,
    name: "bucket",
  })
  @nestAccessControl.UseRoles({
    resource: "Bucket",
    action: "read",
    possession: "any",
  })
  async getBucket(@graphql.Parent() parent: Score): Promise<Bucket | null> {
    const result = await this.service.getBucket(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => Player, {
    nullable: true,
    name: "player",
  })
  @nestAccessControl.UseRoles({
    resource: "Player",
    action: "read",
    possession: "any",
  })
  async getPlayer(@graphql.Parent() parent: Score): Promise<Player | null> {
    const result = await this.service.getPlayer(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
