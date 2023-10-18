import { Module } from '@nestjs/common';
import { CommentService } from './comment.service';
import { CommentController } from './comment.controller';
import { TypeOrmModule } from "@nestjs/typeorm";
import { CommentEntity } from "./entity/Comment.entity";
import { EventModule } from "../event/event.module";
import { UserModule } from "../user/user.module";

@Module({
  controllers: [CommentController],
  providers: [CommentService],
  imports: [
    TypeOrmModule.forFeature([CommentEntity]),
    EventModule,
    UserModule
  ],
  exports: [
    CommentService
  ]
})
export class CommentModule {}
