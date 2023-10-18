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
exports.EventController = void 0;
const common_1 = require("@nestjs/common");
const event_service_1 = require("./event.service");
const CreateEvent_dto_1 = require("./dto/CreateEvent.dto");
const jwt_guard_1 = require("../guards/jwt-guard");
const user_id_decorator_1 = require("../decorators/user_id.decorator");
const platform_express_1 = require("@nestjs/platform-express");
const storage_event_1 = require("../event-file/storage_event");
let EventController = class EventController {
    constructor(eventService) {
        this.eventService = eventService;
    }
    create(dto, userId, file) {
        return this.eventService.createEvent(dto, userId, file);
    }
    getAllEvents() {
        return this.eventService.getAllEvents();
    }
    getMyEvents(userId) {
        return this.eventService.getEventsByUserId(userId);
    }
    getAllEventsWithPagination(page, limit, name) {
        return this.eventService.getAllEventsWithPagination(page, limit, name);
    }
    getEventById(id) {
        return this.eventService.findEventById(id);
    }
    getEventsByName(name) {
        return this.eventService.findEventByName(name);
    }
};
exports.EventController = EventController;
__decorate([
    (0, common_1.Post)('/create'),
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard),
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file', {
        storage: storage_event_1.eventFileStorage
    })),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, user_id_decorator_1.UserId)()),
    __param(2, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CreateEvent_dto_1.CreateEventDto, Number, Object]),
    __metadata("design:returntype", void 0)
], EventController.prototype, "create", null);
__decorate([
    (0, common_1.Get)('/all'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], EventController.prototype, "getAllEvents", null);
__decorate([
    (0, common_1.Get)('/my'),
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard),
    __param(0, (0, user_id_decorator_1.UserId)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], EventController.prototype, "getMyEvents", null);
__decorate([
    (0, common_1.Get)('/pagination'),
    __param(0, (0, common_1.Query)('page')),
    __param(1, (0, common_1.Query)('limit')),
    __param(2, (0, common_1.Query)('name')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, String]),
    __metadata("design:returntype", void 0)
], EventController.prototype, "getAllEventsWithPagination", null);
__decorate([
    (0, common_1.Get)('/id/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], EventController.prototype, "getEventById", null);
__decorate([
    (0, common_1.Get)('/name/:name'),
    __param(0, (0, common_1.Param)('name')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], EventController.prototype, "getEventsByName", null);
exports.EventController = EventController = __decorate([
    (0, common_1.Controller)('event'),
    __metadata("design:paramtypes", [event_service_1.EventService])
], EventController);
//# sourceMappingURL=event.controller.js.map