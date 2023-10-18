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
exports.TagService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const tag_entity_1 = require("./entity/tag.entity");
const typeorm_2 = require("typeorm");
let TagService = class TagService {
    constructor(repository) {
        this.repository = repository;
    }
    async create(dto) {
        const findTag = await this.repository.findOne({ where: { name: dto.name } });
        if (findTag) {
            throw new common_1.HttpException('Тег с таким названием уже существует', common_1.HttpStatus.BAD_REQUEST);
        }
        return await this.repository.save(dto);
    }
    async getAllTag() {
        return this.repository.find();
    }
    async getTagsById(ids) {
        return await this.repository
            .createQueryBuilder('tag')
            .where('tag.id IN (:...ids)', { ids })
            .getMany();
    }
    async getTagsByName(name) {
        const tags = await this.repository.find();
        return tags.filter(tag => tag.name.toLowerCase().includes(name.toLowerCase()));
    }
};
exports.TagService = TagService;
exports.TagService = TagService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(tag_entity_1.TagEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], TagService);
//# sourceMappingURL=tag.service.js.map