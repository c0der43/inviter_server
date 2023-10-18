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
exports.EventTransactionService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const EventTransactionEntity_1 = require("./entity/EventTransactionEntity");
const typeorm_2 = require("typeorm");
const event_service_1 = require("../event/event.service");
const user_service_1 = require("../user/user.service");
let EventTransactionService = class EventTransactionService {
    constructor(repository, eventService, userService) {
        this.repository = repository;
        this.eventService = eventService;
        this.userService = userService;
    }
    async joinToEvent(userId, eventId) {
        const user = await this.userService.getUserById(userId);
        const event = await this.eventService.findEventById(eventId);
        const eqlJoin = await this.findTransactionByEventIdAndUserId(userId, eventId);
        if (eqlJoin) {
            throw new common_1.HttpException('Вы уже присоеденились к этому ивенту!', common_1.HttpStatus.BAD_REQUEST);
        }
        if (event.creator.id == userId) {
            throw new common_1.HttpException('Создатель ивента не может присоедениться к нему!', common_1.HttpStatus.BAD_REQUEST);
        }
        return await this.repository.save({
            event: { id: event.id },
            user: { id: user.id }
        });
    }
    async findTransactionByEventIdAndUserId(userId, eventId) {
        return await this
            .repository
            .createQueryBuilder('qb')
            .leftJoinAndSelect('qb.user', 'user')
            .leftJoinAndSelect('qb.event', 'event')
            .andWhere('user.id = :userId', { userId })
            .andWhere('event.id = :eventId', { eventId })
            .getOne();
    }
};
exports.EventTransactionService = EventTransactionService;
exports.EventTransactionService = EventTransactionService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(EventTransactionEntity_1.EventTransactionEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        event_service_1.EventService,
        user_service_1.UserService])
], EventTransactionService);
//# sourceMappingURL=event-transaction.service.js.map