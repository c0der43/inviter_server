"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const user_module_1 = require("./user/user.module");
const token_module_1 = require("./token/token.module");
const event_module_1 = require("./event/event.module");
const comment_module_1 = require("./comment/comment.module");
const auth_module_1 = require("./auth/auth.module");
const user_entity_1 = require("./user/entity/user.entity");
const token_entity_1 = require("./token/entity/token.entity");
const config_1 = require("@nestjs/config");
const configurations_1 = require("./configurations");
const Event_entity_1 = require("./event/entity/Event.entity");
const event_file_module_1 = require("./event-file/event-file.module");
const eventFile_entity_1 = require("./event-file/entity/eventFile.entity");
const tag_module_1 = require("./tag/tag.module");
const tag_entity_1 = require("./tag/entity/tag.entity");
const event_transaction_module_1 = require("./join-event-transaction/event-transaction.module");
const EventTransactionEntity_1 = require("./join-event-transaction/entity/EventTransactionEntity");
const comments_like_dislike_transaction_module_1 = require("./comments-like-dislike-transaction/comments-like-dislike-transaction.module");
const Comment_entity_1 = require("./comment/entity/Comment.entity");
const CommentLikeEntity_1 = require("./comments-like-dislike-transaction/entity/CommentLikeEntity");
const profile_avatar_module_1 = require("./profile-avatar/profile-avatar.module");
const ProfileAvatar_entity_1 = require("./profile-avatar/entity/ProfileAvatar.entity");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
                load: [configurations_1.default]
            }),
            typeorm_1.TypeOrmModule.forRoot({
                type: 'postgres',
                host: 'localhost',
                port: 5432,
                username: 'postgres',
                password: '100842706',
                database: 'inviter',
                entities: [
                    user_entity_1.UserEntity,
                    token_entity_1.TokenEntity,
                    Event_entity_1.EventEntity,
                    eventFile_entity_1.EventFileEntity,
                    tag_entity_1.TagEntity,
                    EventTransactionEntity_1.EventTransactionEntity,
                    Comment_entity_1.CommentEntity,
                    CommentLikeEntity_1.CommentLikeEntity,
                    ProfileAvatar_entity_1.ProfileAvatarEntity
                ],
                synchronize: true,
            }),
            user_module_1.UserModule,
            token_module_1.TokenModule,
            event_module_1.EventModule,
            comment_module_1.CommentModule,
            auth_module_1.AuthModule,
            event_file_module_1.EventFileModule,
            tag_module_1.TagModule,
            event_transaction_module_1.EventTransactionModule,
            comments_like_dislike_transaction_module_1.CommentsLikeDislikeTransactionModule,
            profile_avatar_module_1.ProfileAvatarModule,
        ],
        controllers: [],
        providers: [],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map