import { MinLength } from "class-validator";

export class CreateCommentDto {
  @MinLength(1)
  text: string;
  eventId: number;
}
