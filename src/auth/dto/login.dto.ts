import { IsEmail, Length, MinLength } from "class-validator";

export class LoginDto {

  @IsEmail({}, {message: 'Введите корректный email!'})
  email: string;

  @MinLength(8, {message: 'Минимальная длина пароля 8 символов!'})
  password: string;

}
