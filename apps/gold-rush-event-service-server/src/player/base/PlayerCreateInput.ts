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
import {
  IsInt,
  Min,
  Max,
  IsOptional,
  IsString,
  MaxLength,
  ValidateNested,
  IsEnum,
} from "class-validator";
import { RewardCreateNestedManyWithoutPlayersInput } from "./RewardCreateNestedManyWithoutPlayersInput";
import { Type } from "class-transformer";
import { ScoreCreateNestedManyWithoutPlayersInput } from "./ScoreCreateNestedManyWithoutPlayersInput";
import { EnumPlayerTypeField } from "./EnumPlayerTypeField";

@InputType()
class PlayerCreateInput {
  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @Min(-999999999)
  @Max(999999999)
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  currentScore?: number | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name?: string | null;

  @ApiProperty({
    required: false,
    type: () => RewardCreateNestedManyWithoutPlayersInput,
  })
  @ValidateNested()
  @Type(() => RewardCreateNestedManyWithoutPlayersInput)
  @IsOptional()
  @Field(() => RewardCreateNestedManyWithoutPlayersInput, {
    nullable: true,
  })
  rewards?: RewardCreateNestedManyWithoutPlayersInput;

  @ApiProperty({
    required: false,
    type: () => ScoreCreateNestedManyWithoutPlayersInput,
  })
  @ValidateNested()
  @Type(() => ScoreCreateNestedManyWithoutPlayersInput)
  @IsOptional()
  @Field(() => ScoreCreateNestedManyWithoutPlayersInput, {
    nullable: true,
  })
  scores?: ScoreCreateNestedManyWithoutPlayersInput;

  @ApiProperty({
    required: false,
    enum: EnumPlayerTypeField,
  })
  @IsEnum(EnumPlayerTypeField)
  @IsOptional()
  @Field(() => EnumPlayerTypeField, {
    nullable: true,
  })
  typeField?: "Option1" | null;
}

export { PlayerCreateInput as PlayerCreateInput };
