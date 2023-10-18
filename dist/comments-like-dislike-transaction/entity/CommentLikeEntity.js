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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentLikeEntity = void 0;
const typeorm_1 = require("typeorm");
const Comment_entity_1 = require("../../comment/entity/Comment.entity");
const user_entity_1 = require("../../user/entity/user.entity");
let CommentLikeEntity = class CommentLikeEntity {
};
exports.CommentLikeEntity = CommentLikeEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], CommentLikeEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.UserEntity, (user) => user.commentActivity, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    }),
    __metadata("design:type", user_entity_1.UserEntity)
], CommentLikeEntity.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Comment_entity_1.CommentEntity, (comment) => comment.likes, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    }),
    __metadata("design:type", Comment_entity_1.CommentEntity)
], CommentLikeEntity.prototype, "comment", void 0);
exports.CommentLikeEntity = CommentLikeEntity = __decorate([
    (0, typeorm_1.Entity)('comments_like_dislike')
], CommentLikeEntity);
//# sourceMappingURL=CommentLikeEntity.js.map