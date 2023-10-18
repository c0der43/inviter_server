"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentsLikeDislikeTransactionModule = void 0;
const common_1 = require("@nestjs/common");
const comments_like_dislike_transaction_service_1 = require("./comments-like-dislike-transaction.service");
const comments_like_dislike_transaction_controller_1 = require("./comments-like-dislike-transaction.controller");
const typeorm_1 = require("@nestjs/typeorm");
const CommentLikeEntity_1 = require("./entity/CommentLikeEntity");
const user_module_1 = require("../user/user.module");
const comment_module_1 = require("../comment/comment.module");
let CommentsLikeDislikeTransactionModule = class CommentsLikeDislikeTransactionModule {
};
exports.CommentsLikeDislikeTransactionModule = CommentsLikeDislikeTransactionModule;
exports.CommentsLikeDislikeTransactionModule = CommentsLikeDislikeTransactionModule = __decorate([
    (0, common_1.Module)({
        controllers: [comments_like_dislike_transaction_controller_1.CommentsLikeDislikeTransactionController],
        providers: [comments_like_dislike_transaction_service_1.CommentsLikeDislikeTransactionService],
        imports: [
            typeorm_1.TypeOrmModule.forFeature([CommentLikeEntity_1.CommentLikeEntity]),
            user_module_1.UserModule,
            comment_module_1.CommentModule
        ]
    })
], CommentsLikeDislikeTransactionModule);
//# sourceMappingURL=comments-like-dislike-transaction.module.js.map