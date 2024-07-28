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
import { BucketWhereUniqueInput } from "../../bucket/base/BucketWhereUniqueInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { PlayerWhereUniqueInput } from "../../player/base/PlayerWhereUniqueInput";

@InputType()
class ScoreWhereInput {
  @ApiProperty({
    required: false,
    type: () => BucketWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => BucketWhereUniqueInput)
  @IsOptional()
  @Field(() => BucketWhereUniqueInput, {
    nullable: true,
  })
  bucket?: BucketWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: IntNullableFilter,
  })
  @Type(() => IntNullableFilter)
  @IsOptional()
  @Field(() => IntNullableFilter, {
    nullable: true,
  })
  goldCollected?: IntNullableFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  id?: StringFilter;

  @ApiProperty({
    required: false,
    type: () => PlayerWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => PlayerWhereUniqueInput)
  @IsOptional()
  @Field(() => PlayerWhereUniqueInput, {
    nullable: true,
  })
  player?: PlayerWhereUniqueInput;
}

export { ScoreWhereInput as ScoreWhereInput };