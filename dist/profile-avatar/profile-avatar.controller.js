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
exports.ProfileAvatarController = void 0;
const common_1 = require("@nestjs/common");
const profile_avatar_service_1 = require("./profile-avatar.service");
const jwt_guard_1 = require("../guards/jwt-guard");
const platform_express_1 = require("@nestjs/platform-express");
const user_id_decorator_1 = require("../decorators/user_id.decorator");
const avatarStorage_1 = require("./storage/avatarStorage");
let ProfileAvatarController = class ProfileAvatarController {
    constructor(profileAvatarService) {
        this.profileAvatarService = profileAvatarService;
    }
    addAvatar(userId, file) {
        return this.profileAvatarService.addAvatar(userId, file);
    }
};
exports.ProfileAvatarController = ProfileAvatarController;
__decorate([
    (0, common_1.Post)('/add'),
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file', {
        storage: avatarStorage_1.avatarFileStorage
    })),
    __param(0, (0, user_id_decorator_1.UserId)()),
    __param(1, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", void 0)
], ProfileAvatarController.prototype, "addAvatar", null);
exports.ProfileAvatarController = ProfileAvatarController = __decorate([
    (0, common_1.Controller)('profile-avatar'),
    __metadata("design:paramtypes", [profile_avatar_service_1.ProfileAvatarService])
], ProfileAvatarController);
//# sourceMappingURL=profile-avatar.controller.js.map