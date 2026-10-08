import { Type } from "class-transformer";
import { IsIn, IsInt, IsNotEmpty, IsOptional, Max, Min } from "class-validator";

// TODO 3: Add category validation and explicit numeric conversion for limit.
export class FilterProductsQueryDto {
  @IsOptional()
  @IsNotEmpty()
  @IsIn(['office','electronics'])
  category?: 'office' | 'electronics';

  @Type(() => Number)
  @IsInt()
  @Min(1)
  @Max(20)
  limit: number = 5;
}
