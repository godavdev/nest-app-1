import {
  IsEmail,
  IsNumber,
  IsString,
  Max,
  Min,
  MinLength,
} from 'class-validator';

export class UserDto {
  @IsString()
  @MinLength(2)
  name: string;
  @IsEmail()
  email: string;
  @IsNumber()
  @Min(10)
  @Max(100)
  age: number;
}
