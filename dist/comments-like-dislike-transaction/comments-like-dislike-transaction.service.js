"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentsLikeDislikeTransactionService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const CommentLikeEntity_1 = require("./entity/CommentLikeEntity");
const typeorm_2 = require("typeorm");
const user_service_1 = require("../user/user.service");
const comment_service_1 = require("../comment/comment.service");
let CommentsLikeDislikeTransactionService = class CommentsLikeDislikeTransactionService {
    constructor(repository, userService, commentService) {
        this.repository = repository;
        this.userService = userService;
        this.commentService = commentService;
    }
    async likeCommentById(commentId, userId) {
        const findComment = await this.commentService.getCommentById(commentId);
        const findUser = await this.userService.getUserById(userId);
        await this.repository.save({
            user: { id: findUser.id },
            comment: { id: findComment.id }
        });
        return await this.commentService.addOneLikesComment(commentId);
    }
};
exports.CommentsLikeDislikeTransactionService = CommentsLikeDislikeTransactionService;
exports.CommentsLikeDislikeTransactionService = CommentsLikeDislikeTransactionService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(CommentLikeEntity_1.CommentLikeEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        user_service_1.UserService,
        comment_service_1.CommentService])
], CommentsLikeDislikeTransactionService);
//# sourceMappingURL=comments-like-dislike-transaction.service.js.map