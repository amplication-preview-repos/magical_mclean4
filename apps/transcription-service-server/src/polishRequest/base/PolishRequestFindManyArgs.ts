/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { PolishRequestWhereInput } from "./PolishRequestWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { PolishRequestOrderByInput } from "./PolishRequestOrderByInput";

@ArgsType()
class PolishRequestFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => PolishRequestWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => PolishRequestWhereInput, { nullable: true })
  @Type(() => PolishRequestWhereInput)
  where?: PolishRequestWhereInput;

  @ApiProperty({
    required: false,
    type: [PolishRequestOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [PolishRequestOrderByInput], { nullable: true })
  @Type(() => PolishRequestOrderByInput)
  orderBy?: Array<PolishRequestOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { PolishRequestFindManyArgs as PolishRequestFindManyArgs };
