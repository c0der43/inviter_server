import { IsEmail, IsString, Length, MinLength } from "class-validator";

export class CreateUserDto {

  @IsEmail({},{message: 'Введите корректный email!'})
  email: string;

  @Length(2, 50, {message: 'Введите корректное имя!'})
  firstName: string;

  @Length(2, 50, {message: 'Введите корректную фамилию!'})
  lastName: string;

  @MinLength(8, {message: 'Минимальная длина пароля 8 символов!'})
  password: string;

}
