import { IsNotEmpty, MinLength } from "class-validator";

export class CreateEventDto {

  @MinLength(2, {message: 'Минимальная длина 2 символа!'})
  name: string;

  @MinLength(10, {message: 'Минимальная длинна для описания 10 симолов!'})
  desc: string;

  @IsNotEmpty({message: 'Введите верную дату!'})
  date: string;

  @IsNotEmpty({message: 'Время не должно быть пустым!'})
  time: string;

  @IsNotEmpty({message: 'Продолжительное время не должно быть пустым!'})
  duration: string;

  @IsNotEmpty({message: 'Поле локация не должно быть пустым!'})
  locationName: string;

  @IsNotEmpty({message: 'Поле lat не должно быть пустым!'})
  locationLat: string;

  @IsNotEmpty({message: 'Поле lng не должно быть пустым!'})
  locationLng: string;

  maxMember: number;

  tags: string;
  invitedCurators: string;
}
