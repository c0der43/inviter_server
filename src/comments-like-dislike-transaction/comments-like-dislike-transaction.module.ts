import { Module } from '@nestjs/common';
import { CommentsLikeDislikeTransactionService } from './comments-like-dislike-transaction.service';
import { CommentsLikeDislikeTransactionController } from './comments-like-dislike-transaction.controller';
import { TypeOrmModule } from "@nestjs/typeorm";
import { CommentLikeEntity } from "./entity/CommentLikeEntity";
import { UserModule } from "../user/user.module";
import { CommentModule } from "../comment/comment.module";

@Module({
  controllers: [CommentsLikeDislikeTransactionController],
  providers: [CommentsLikeDislikeTransactionService],
  imports: [
    TypeOrmModule.forFeature([CommentLikeEntity]),
    UserModule,
    CommentModule
  ]
})
export class CommentsLikeDislikeTransactionModule {}
