import { Controller, Param, Post, UseGuards } from "@nestjs/common";
import { CommentsLikeDislikeTransactionService } from './comments-like-dislike-transaction.service';
import { JwtAuthGuard } from "../guards/jwt-guard";
import { UserId } from "../decorators/user_id.decorator";

@Controller('like')
export class CommentsLikeDislikeTransactionController {
  constructor(private readonly commentsLikeDislikeTransactionService: CommentsLikeDislikeTransactionService) {}

  @Post('/:id')
  @UseGuards(JwtAuthGuard)
  addLike(
    @Param('id') commentId: number,
    @UserId() userId: number
  ){
    return this.commentsLikeDislikeTransactionService.likeCommentById(commentId, userId);
  }
}
