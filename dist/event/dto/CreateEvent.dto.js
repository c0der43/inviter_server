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
exports.CreateEventDto = void 0;
const class_validator_1 = require("class-validator");
class CreateEventDto {
}
exports.CreateEventDto = CreateEventDto;
__decorate([
    (0, class_validator_1.MinLength)(2, { message: 'Минимальная длина 2 символа!' }),
    __metadata("design:type", String)
], CreateEventDto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.MinLength)(10, { message: 'Минимальная длинна для описания 10 симолов!' }),
    __metadata("design:type", String)
], CreateEventDto.prototype, "desc", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'Введите верную дату!' }),
    __metadata("design:type", String)
], CreateEventDto.prototype, "date", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'Время не должно быть пустым!' }),
    __metadata("design:type", String)
], CreateEventDto.prototype, "time", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'Продолжительное время не должно быть пустым!' }),
    __metadata("design:type", String)
], CreateEventDto.prototype, "duration", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'Поле локация не должно быть пустым!' }),
    __metadata("design:type", String)
], CreateEventDto.prototype, "locationName", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'Поле lat не должно быть пустым!' }),
    __metadata("design:type", String)
], CreateEventDto.prototype, "locationLat", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'Поле lng не должно быть пустым!' }),
    __metadata("design:type", String)
], CreateEventDto.prototype, "locationLng", void 0);
//# sourceMappingURL=CreateEvent.dto.js.map