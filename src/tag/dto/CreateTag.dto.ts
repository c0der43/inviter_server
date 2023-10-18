import { Length } from "class-validator";

export class CreateTagDto {

  @Length(2, 20, {message: 'Длина тега не должна быть менее 2 и более 20 символов!'})
  name: string;

}
