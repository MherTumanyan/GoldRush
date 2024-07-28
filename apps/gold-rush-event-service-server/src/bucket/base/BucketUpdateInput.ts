/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { EventWhereUniqueInput } from "../../event/base/EventWhereUniqueInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { RewardUpdateManyWithoutBucketsInput } from "./RewardUpdateManyWithoutBucketsInput";
import { ScoreUpdateManyWithoutBucketsInput } from "./ScoreUpdateManyWithoutBucketsInput";

@InputType()
class BucketUpdateInput {
  @ApiProperty({
    required: false,
    type: () => EventWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => EventWhereUniqueInput)
  @IsOptional()
  @Field(() => EventWhereUniqueInput, {
    nullable: true,
  })
  event?: EventWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => RewardUpdateManyWithoutBucketsInput,
  })
  @ValidateNested()
  @Type(() => RewardUpdateManyWithoutBucketsInput)
  @IsOptional()
  @Field(() => RewardUpdateManyWithoutBucketsInput, {
    nullable: true,
  })
  rewards?: RewardUpdateManyWithoutBucketsInput;

  @ApiProperty({
    required: false,
    type: () => ScoreUpdateManyWithoutBucketsInput,
  })
  @ValidateNested()
  @Type(() => ScoreUpdateManyWithoutBucketsInput)
  @IsOptional()
  @Field(() => ScoreUpdateManyWithoutBucketsInput, {
    nullable: true,
  })
  scores?: ScoreUpdateManyWithoutBucketsInput;
}

export { BucketUpdateInput as BucketUpdateInput };