import { Injectable } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { CommentLikeEntity } from "./entity/CommentLikeEntity";
import { Repository } from "typeorm";
import { UserService } from "../user/user.service";
import { CommentService } from "../comment/comment.service";

@Injectable()
export class CommentsLikeDislikeTransactionService {

  constructor(
    @InjectRepository(CommentLikeEntity)
    private readonly repository: Repository<CommentLikeEntity>,
    private readonly userService: UserService,
    protected readonly commentService: CommentService
  ) {}

  async likeCommentById(commentId: number, userId: number){
    const findComment = await this.commentService.getCommentById(commentId);
    const findUser = await this.userService.getUserById(userId);

    await this.repository.save({
        user: {id: findUser.id},
        comment: {id: findComment.id}
      });

    return await this.commentService.addOneLikesComment(commentId);
  }
}
