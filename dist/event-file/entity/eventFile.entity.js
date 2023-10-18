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
exports.EventFileEntity = void 0;
const typeorm_1 = require("typeorm");
const Event_entity_1 = require("../../event/entity/Event.entity");
let EventFileEntity = class EventFileEntity {
};
exports.EventFileEntity = EventFileEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], EventFileEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], EventFileEntity.prototype, "fileName", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], EventFileEntity.prototype, "mimeType", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], EventFileEntity.prototype, "size", void 0);
__decorate([
    (0, typeorm_1.JoinColumn)(),
    (0, typeorm_1.OneToOne)(() => Event_entity_1.EventEntity, (event) => event.previewFile, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    }),
    __metadata("design:type", Event_entity_1.EventEntity)
], EventFileEntity.prototype, "event", void 0);
exports.EventFileEntity = EventFileEntity = __decorate([
    (0, typeorm_1.Entity)('file_entity')
], EventFileEntity);
//# sourceMappingURL=eventFile.entity.js.map