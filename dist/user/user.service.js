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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const user_entity_1 = require("./entity/user.entity");
const typeorm_2 = require("typeorm");
let UserService = class UserService {
    constructor(repository) {
        this.repository = repository;
    }
    async createUser(dto) {
        const findUser = await this.repository.findOne({ where: { email: dto.email } });
        if (findUser) {
            throw new common_1.HttpException('Пользователь с таким email уже существует!', common_1.HttpStatus.BAD_REQUEST);
        }
        return await this.repository.save(dto);
    }
    async findUserByEmail(email) {
        const findUser = await this.repository.findOne({ where: { email: email } });
        if (!findUser) {
            throw new common_1.HttpException('Пользователь с таким email не был найден!', common_1.HttpStatus.NOT_FOUND);
        }
        return findUser;
    }
    async getMe(userId) {
        return await this.getUserById(userId);
    }
    async getUserById(id) {
        const qb = this.repository.createQueryBuilder('qb');
        const user = await qb
            .where('qb.id = :id', { id })
            .leftJoinAndSelect('qb.avatar', 'avatar')
            .getOne();
        if (!user) {
            throw new common_1.HttpException('Пользователь не найден!', common_1.HttpStatus.BAD_REQUEST);
        }
        return user;
    }
    async getAllUsers() {
        const qb = this.repository.createQueryBuilder('qb');
        return await qb
            .leftJoinAndSelect('qb.invitedAsCurator', 'invitedAsCurator')
            .getMany();
    }
    async getUsersById(ids) {
        if (ids.length == 0)
            return [];
        return await this.repository
            .createQueryBuilder('user')
            .where('user.id IN (:...ids)', { ids })
            .getMany();
    }
    async getUsersByNick(nick) {
        return await this.repository
            .createQueryBuilder('user')
            .where('user.name LIKE :nick', { nick: `%${nick}%` })
            .getMany();
    }
    async getUserByEmail(email) {
        return await this.repository
            .createQueryBuilder('user')
            .where('user.email = :email', { email })
            .getOne();
    }
    async deleteUserAccount(userId) {
        const findUser = await this.getUserById(userId);
        return await this.repository.delete(findUser);
    }
};
exports.UserService = UserService;
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.UserEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], UserService);
//# sourceMappingURL=user.service.js.map