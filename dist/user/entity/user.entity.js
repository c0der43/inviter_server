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
exports.UserEntity = void 0;
const typeorm_1 = require("typeorm");
const token_entity_1 = require("../../token/entity/token.entity");
const Event_entity_1 = require("../../event/entity/Event.entity");
const EventTransactionEntity_1 = require("../../join-event-transaction/entity/EventTransactionEntity");
const Comment_entity_1 = require("../../comment/entity/Comment.entity");
const CommentLikeEntity_1 = require("../../comments-like-dislike-transaction/entity/CommentLikeEntity");
const ProfileAvatar_entity_1 = require("../../profile-avatar/entity/ProfileAvatar.entity");
const UserRole_1 = require("../types/UserRole");
let UserEntity = class UserEntity {
};
exports.UserEntity = UserEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], UserEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ unique: true }),
    __metadata("design:type", String)
], UserEntity.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false }),
    __metadata("design:type", String)
], UserEntity.prototype, "password", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false }),
    __metadata("design:type", String)
], UserEntity.prototype, "firstName", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false }),
    __metadata("design:type", String)
], UserEntity.prototype, "lastName", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: UserRole_1.EUserRole.USER }),
    __metadata("design:type", String)
], UserEntity.prototype, "role", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => ProfileAvatar_entity_1.ProfileAvatarEntity, (avatar) => avatar.user, {
        cascade: true
    }),
    __metadata("design:type", ProfileAvatar_entity_1.ProfileAvatarEntity)
], UserEntity.prototype, "avatar", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Event_entity_1.EventEntity, (events) => events.creator, {
        cascade: true
    }),
    __metadata("design:type", Event_entity_1.EventEntity)
], UserEntity.prototype, "createdEvents", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => token_entity_1.TokenEntity, (token) => token.user, {
        cascade: true
    }),
    __metadata("design:type", token_entity_1.TokenEntity)
], UserEntity.prototype, "token", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Event_entity_1.EventEntity, (event) => event.invitedCurators, {
        cascade: true
    }),
    __metadata("design:type", Array)
], UserEntity.prototype, "invitedAsCurator", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => EventTransactionEntity_1.EventTransactionEntity, (event) => event.user, {
        cascade: true
    }),
    __metadata("design:type", Array)
], UserEntity.prototype, "eventTransactions", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Comment_entity_1.CommentEntity, (comment) => comment.user, {
        cascade: true
    }),
    __metadata("design:type", Array)
], UserEntity.prototype, "comments", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => CommentLikeEntity_1.CommentLikeEntity, (activity) => activity.user, {
        cascade: true
    }),
    __metadata("design:type", Array)
], UserEntity.prototype, "commentActivity", void 0);
exports.UserEntity = UserEntity = __decorate([
    (0, typeorm_1.Entity)('user')
], UserEntity);
//# sourceMappingURL=user.entity.js.map