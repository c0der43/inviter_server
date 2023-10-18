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
exports.EventEntity = void 0;
const typeorm_1 = require("typeorm");
const user_entity_1 = require("../../user/entity/user.entity");
const eventFile_entity_1 = require("../../event-file/entity/eventFile.entity");
const tag_entity_1 = require("../../tag/entity/tag.entity");
const EventTransactionEntity_1 = require("../../join-event-transaction/entity/EventTransactionEntity");
const Comment_entity_1 = require("../../comment/entity/Comment.entity");
let EventEntity = class EventEntity {
};
exports.EventEntity = EventEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], EventEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], EventEntity.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)('text'),
    __metadata("design:type", String)
], EventEntity.prototype, "desc", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date' }),
    __metadata("design:type", String)
], EventEntity.prototype, "date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'time' }),
    __metadata("design:type", String)
], EventEntity.prototype, "time", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'time' }),
    __metadata("design:type", String)
], EventEntity.prototype, "duration", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], EventEntity.prototype, "locationName", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'double precision' }),
    __metadata("design:type", String)
], EventEntity.prototype, "locationLat", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'double precision' }),
    __metadata("design:type", String)
], EventEntity.prototype, "locationLng", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 10 }),
    __metadata("design:type", Number)
], EventEntity.prototype, "maxMember", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.UserEntity, (user) => user.createdEvents, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    }),
    __metadata("design:type", user_entity_1.UserEntity)
], EventEntity.prototype, "creator", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], EventEntity.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => eventFile_entity_1.EventFileEntity, (file) => file.event, {
        cascade: true
    }),
    __metadata("design:type", eventFile_entity_1.EventFileEntity)
], EventEntity.prototype, "previewFile", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => user_entity_1.UserEntity, (user) => user.invitedAsCurator, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    }),
    (0, typeorm_1.JoinTable)(),
    __metadata("design:type", Array)
], EventEntity.prototype, "invitedCurators", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => EventTransactionEntity_1.EventTransactionEntity, (transaction) => transaction.event, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    }),
    __metadata("design:type", Array)
], EventEntity.prototype, "users", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => tag_entity_1.TagEntity, (tag) => tag.events, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    }),
    __metadata("design:type", Array)
], EventEntity.prototype, "tags", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Comment_entity_1.CommentEntity, (comment) => comment.event, {
        cascade: true
    }),
    __metadata("design:type", Array)
], EventEntity.prototype, "comments", void 0);
exports.EventEntity = EventEntity = __decorate([
    (0, typeorm_1.Entity)('event')
], EventEntity);
//# sourceMappingURL=Event.entity.js.map