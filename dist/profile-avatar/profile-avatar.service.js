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
exports.ProfileAvatarService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const ProfileAvatar_entity_1 = require("./entity/ProfileAvatar.entity");
const typeorm_2 = require("typeorm");
const user_service_1 = require("../user/user.service");
const path = require("path");
let ProfileAvatarService = class ProfileAvatarService {
    constructor(repository, userService) {
        this.repository = repository;
        this.userService = userService;
    }
    async addAvatar(userId, file) {
        console.log(file);
        const absolutePath = path.resolve(file.path);
        const user = await this.userService.getUserById(userId);
        const findAvatar = await this.findUserAvatar(user.id);
        if (findAvatar) {
            return await this.repository.update(findAvatar, {
                fileName: file.filename,
                mimeType: file.mimetype,
                size: file.size
            });
        }
        return await this.repository.save({
            fileName: file.filename,
            mimeType: file.mimetype,
            size: file.size,
            user: { id: user.id }
        });
    }
    async findUserAvatar(userId) {
        return await this
            .repository
            .createQueryBuilder('qb')
            .leftJoinAndSelect('qb.user', 'user')
            .andWhere('user.id = :id', { id: userId })
            .getOne();
    }
};
exports.ProfileAvatarService = ProfileAvatarService;
exports.ProfileAvatarService = ProfileAvatarService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(ProfileAvatar_entity_1.ProfileAvatarEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        user_service_1.UserService])
], ProfileAvatarService);
//# sourceMappingURL=profile-avatar.service.js.map