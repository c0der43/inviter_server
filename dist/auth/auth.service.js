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
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const user_service_1 = require("../user/user.service");
const bcrypt = require("bcrypt");
const token_service_1 = require("../token/token.service");
let AuthService = class AuthService {
    constructor(userService, tokenService) {
        this.userService = userService;
        this.tokenService = tokenService;
    }
    async registration(dto) {
        const user = await this.userService.createUser({
            ...dto,
            password: await bcrypt.hash(dto.password, 15)
        });
        const token = await this.tokenService.generateJwtToken({
            id: user.id,
            firstName: user.firstName,
            email: user.email
        });
        await this.tokenService.saveToken(user.id, token);
        return {
            token: token
        };
    }
    async login(dto) {
        const findUser = await this.userService.findUserByEmail(dto.email);
        const passwordEql = await bcrypt.compare(dto.password, findUser.password);
        if (!passwordEql) {
            throw new common_1.HttpException('Логин или пароль неверный!', common_1.HttpStatus.NOT_FOUND);
        }
        if (findUser && passwordEql) {
            const token = await this.tokenService.generateJwtToken({
                id: findUser.id,
                firstName: findUser.firstName,
                email: findUser.email
            });
            await this.tokenService.updateToken(findUser.id, token);
            return {
                token: token
            };
        }
        return new common_1.HttpException('Неверный логин или пароль!', common_1.HttpStatus.BAD_REQUEST);
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [user_service_1.UserService,
        token_service_1.TokenService])
], AuthService);
//# sourceMappingURL=auth.service.js.map