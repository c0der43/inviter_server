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
exports.EventTransactionEntity = void 0;
const typeorm_1 = require("typeorm");
const Event_entity_1 = require("../../event/entity/Event.entity");
const user_entity_1 = require("../../user/entity/user.entity");
let EventTransactionEntity = class EventTransactionEntity {
};
exports.EventTransactionEntity = EventTransactionEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], EventTransactionEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Event_entity_1.EventEntity, (event) => event.users, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    }),
    __metadata("design:type", Event_entity_1.EventEntity)
], EventTransactionEntity.prototype, "event", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.UserEntity, (user) => user.eventTransactions, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    }),
    __metadata("design:type", user_entity_1.UserEntity)
], EventTransactionEntity.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", String)
], EventTransactionEntity.prototype, "create_at", void 0);
exports.EventTransactionEntity = EventTransactionEntity = __decorate([
    (0, typeorm_1.Entity)('join_event_transaction')
], EventTransactionEntity);
//# sourceMappingURL=EventTransactionEntity.js.map