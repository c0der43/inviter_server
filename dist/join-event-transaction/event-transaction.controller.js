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
exports.EventTransactionController = void 0;
const common_1 = require("@nestjs/common");
const event_transaction_service_1 = require("./event-transaction.service");
const jwt_guard_1 = require("../guards/jwt-guard");
const user_id_decorator_1 = require("../decorators/user_id.decorator");
let EventTransactionController = class EventTransactionController {
    constructor(joinEventTransactionService) {
        this.joinEventTransactionService = joinEventTransactionService;
    }
    joinToEvent(userId, eventId) {
        return this.joinEventTransactionService.joinToEvent(userId, eventId);
    }
};
exports.EventTransactionController = EventTransactionController;
__decorate([
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard),
    (0, common_1.Post)('/join/:id'),
    __param(0, (0, user_id_decorator_1.UserId)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", void 0)
], EventTransactionController.prototype, "joinToEvent", null);
exports.EventTransactionController = EventTransactionController = __decorate([
    (0, common_1.Controller)('event_transaction'),
    __metadata("design:paramtypes", [event_transaction_service_1.EventTransactionService])
], EventTransactionController);
//# sourceMappingURL=event-transaction.controller.js.map