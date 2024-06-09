import { IsOptional, IsNotEmpty } from 'class-validator';

export class UpdateTaskDto {
  @IsOptional()
  @IsNotEmpty()
  title: string;

  @IsOptional()
  description: string;

  @IsOptional()
  status: boolean;
}
