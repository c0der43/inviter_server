import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { TokenModule } from './token/token.module';
import { EventModule } from './event/event.module';
import { CommentModule } from './comment/comment.module';
import { AuthModule } from './auth/auth.module';
import { UserEntity } from "./user/entity/user.entity";
import { TokenEntity } from "./token/entity/token.entity";
import { ConfigModule } from "@nestjs/config";
import configurations from "./configurations";
import { EventEntity } from "./event/entity/Event.entity";
import { EventFileModule } from './event-file/event-file.module';
import { EventFileEntity } from "./event-file/entity/eventFile.entity";
import { TagModule } from './tag/tag.module';
import { TagEntity } from "./tag/entity/tag.entity";
import { EventTransactionModule } from './join-event-transaction/event-transaction.module';
import { EventTransactionEntity } from "./join-event-transaction/entity/EventTransactionEntity";
import { CommentsLikeDislikeTransactionModule } from './comments-like-dislike-transaction/comments-like-dislike-transaction.module';
import { CommentEntity } from "./comment/entity/Comment.entity";
import { CommentLikeEntity } from "./comments-like-dislike-transaction/entity/CommentLikeEntity";
import { ProfileAvatarModule } from './profile-avatar/profile-avatar.module';
import { ProfileAvatarEntity } from "./profile-avatar/entity/ProfileAvatar.entity";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configurations]
    }),

    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '100842706',
      database: 'inviter',
      entities: [
        UserEntity,
        TokenEntity,
        EventEntity,
        EventFileEntity,
        TagEntity,
        EventTransactionEntity,
        CommentEntity,
        CommentLikeEntity,
        ProfileAvatarEntity
      ],
      synchronize: true,
    }),
    UserModule,
    TokenModule,
    EventModule,
    CommentModule,
    AuthModule,
    EventFileModule,
    TagModule,
    EventTransactionModule,
    CommentsLikeDislikeTransactionModule,
    ProfileAvatarModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
