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
exports.EventService = void 0;
const common_1 = require("@nestjs/common");
const Event_entity_1 = require("./entity/Event.entity");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
const user_service_1 = require("../user/user.service");
const fs = require("fs");
const path = require("path");
const event_file_service_1 = require("../event-file/event-file.service");
const tag_service_1 = require("../tag/tag.service");
const utils_1 = require("../utils/utils");
let EventService = class EventService {
    constructor(repository, userService, eventFileService, tagService) {
        this.repository = repository;
        this.userService = userService;
        this.eventFileService = eventFileService;
        this.tagService = tagService;
    }
    async createEvent(dto, userId, file) {
        const absolutePath = path.resolve(file.path);
        try {
            const findUser = await this.userService.getUserById(userId);
            const curators = await this.userService.getUsersById(typeof dto.invitedCurators === 'string' ?
                (0, utils_1.convertStringNumbersToArrayNumber)(dto.invitedCurators) :
                dto.invitedCurators);
            const tags = await this.tagService.getTagsById(typeof dto.tags === 'string' ?
                (0, utils_1.convertStringNumbersToArrayNumber)(dto.tags) :
                dto.tags);
            const event = await this.repository.save({
                ...dto,
                creator: { id: findUser.id },
                invitedCurators: curators,
                tags: tags,
            });
            await this.eventFileService.create(event.id, file);
            return event;
        }
        catch (error) {
            console.log(error);
            fs.unlinkSync(absolutePath);
            return error;
        }
    }
    async findEventById(eventId) {
        const qb = this.repository.createQueryBuilder('qb');
        const findEvent = await qb
            .where('qb.id = :id', { id: eventId })
            .leftJoinAndSelect('qb.previewFile', 'previewFile')
            .leftJoinAndSelect('qb.invitedCurators', 'invitedCurators')
            .leftJoinAndSelect('qb.tags', 'tags')
            .leftJoinAndSelect('qb.creator', 'creator')
            .leftJoinAndSelect('qb.users', 'users')
            .leftJoinAndSelect('users.user', 'user')
            .getOne();
        if (!findEvent) {
            throw new common_1.HttpException('Не удалось найти event с таким id!', common_1.HttpStatus.BAD_REQUEST);
        }
        return findEvent;
    }
    async getAllEvents() {
        const qb = this.repository.createQueryBuilder('qb');
        return await qb
            .leftJoinAndSelect('qb.tags', 'tags')
            .leftJoinAndSelect('qb.previewFile', 'previewFile')
            .leftJoinAndSelect('qb.creator', 'creator')
            .getMany();
    }
    async getAllEventsWithPagination(page, limit, name) {
        return await this.repository
            .createQueryBuilder('qb')
            .leftJoinAndSelect('qb.tags', 'tags')
            .leftJoinAndSelect('qb.previewFile', 'previewFile')
            .leftJoinAndSelect('qb.creator', 'creator')
            .leftJoinAndSelect('qb.invitedCurators', 'invitedCurators')
            .where('qb.name LIKE :name', { name: `%${name}%` })
            .take(limit)
            .skip((page - 1) * limit)
            .getMany();
    }
    async findEventByName(name) {
        return await this.repository
            .createQueryBuilder('qb')
            .leftJoinAndSelect('qb.tags', 'tags')
            .leftJoinAndSelect('qb.previewFile', 'previewFile')
            .leftJoinAndSelect('qb.creator', 'creator')
            .leftJoinAndSelect('qb.invitedCurators', 'invitedCurators')
            .where('qb.name LIKE :name', { name: `%${name}%` })
            .getMany();
    }
    async getEventsByUserId(userId) {
        const findUser = await this.userService.getUserById(userId);
        const qb = await this.repository.createQueryBuilder('qb');
        return await qb.leftJoin('qb.creator', 'creator')
            .andWhere('creator.id = :id', { id: findUser.id })
            .getMany();
    }
};
exports.EventService = EventService;
exports.EventService = EventService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(Event_entity_1.EventEntity)),
    __metadata("design:paramtypes", [typeorm_1.Repository,
        user_service_1.UserService,
        event_file_service_1.EventFileService,
        tag_service_1.TagService])
], EventService);
//# sourceMappingURL=event.service.js.map