import { Body, Controller, Delete, Get, Param, Post, UseGuards, UsePipes, ValidationPipe } from "@nestjs/common";
import { CommentService } from './comment.service';
import { JwtAuthGuard } from "../guards/jwt-guard";
import { CreateCommentDto } from "./dto/CreateComment.dto";
import { UserId } from "../decorators/user_id.decorator";

@Controller('comment')
export class CommentController {
  constructor(private readonly commentService: CommentService) {}

  @Post('/create')
  @UseGuards(JwtAuthGuard)
  @UsePipes(new ValidationPipe())
  createComment(
    @Body() dto: CreateCommentDto,
    @UserId() userId: number
  ){
    return this.commentService.createComment(dto, userId);
  }

  @Get('/eventId/:id')
  getComments(
    @Param('id') eventId: number
  ){
    return this.commentService.getCommentsByEventId(eventId);
  }

  @Delete('/delete/:id')
  @UseGuards(JwtAuthGuard)
  deleteMyComment(
    @Param('id') commentId: number,
    @UserId() userId: number
  ){
    return this.commentService.deleteMyComment(userId, commentId);
  }
}
