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
exports.CommentEntity = void 0;
const typeorm_1 = require("typeorm");
const user_entity_1 = require("../../user/entity/user.entity");
const CommentLikeEntity_1 = require("../../comments-like-dislike-transaction/entity/CommentLikeEntity");
const Event_entity_1 = require("../../event/entity/Event.entity");
let CommentEntity = class CommentEntity {
};
exports.CommentEntity = CommentEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], CommentEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('text'),
    __metadata("design:type", String)
], CommentEntity.prototype, "text", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.UserEntity, (user) => user.comments, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    }),
    __metadata("design:type", user_entity_1.UserEntity)
], CommentEntity.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Event_entity_1.EventEntity, (event) => event.comments, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    }),
    __metadata("design:type", Event_entity_1.EventEntity)
], CommentEntity.prototype, "event", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 0 }),
    __metadata("design:type", Number)
], CommentEntity.prototype, "likesCount", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => CommentLikeEntity_1.CommentLikeEntity, (activity) => activity.comment, {
        cascade: true
    }),
    __metadata("design:type", Array)
], CommentEntity.prototype, "likes", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", String)
], CommentEntity.prototype, "create_at", void 0);
exports.CommentEntity = CommentEntity = __decorate([
    (0, typeorm_1.Entity)('comment')
], CommentEntity);
//# sourceMappingURL=Comment.entity.js.map