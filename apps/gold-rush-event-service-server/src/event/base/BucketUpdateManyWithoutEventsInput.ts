/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { BucketWhereUniqueInput } from "../../bucket/base/BucketWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class BucketUpdateManyWithoutEventsInput {
  @Field(() => [BucketWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [BucketWhereUniqueInput],
  })
  connect?: Array<BucketWhereUniqueInput>;

  @Field(() => [BucketWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [BucketWhereUniqueInput],
  })
  disconnect?: Array<BucketWhereUniqueInput>;

  @Field(() => [BucketWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [BucketWhereUniqueInput],
  })
  set?: Array<BucketWhereUniqueInput>;
}

export { BucketUpdateManyWithoutEventsInput as BucketUpdateManyWithoutEventsInput };