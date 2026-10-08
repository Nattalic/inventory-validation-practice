// TODO 1: Add the input validators described in the exercise.

import { IsIn, IsInt, IsNotEmpty, IsString, Max, MaxLength, Min } from "class-validator";

// Keep this DTO as a class and import it normally in the controller.
export class CreateProductDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(60)
  name!: string;

  @IsString()
  @IsNotEmpty()
  @IsIn(['office', 'electronics'])
  category!: 'office' | 'electronics';

  @IsInt()
  @Min(0)
  @Max(1000)
  stock!: number;
}
