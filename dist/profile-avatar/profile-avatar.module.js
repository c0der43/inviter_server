"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileAvatarModule = void 0;
const common_1 = require("@nestjs/common");
const profile_avatar_service_1 = require("./profile-avatar.service");
const profile_avatar_controller_1 = require("./profile-avatar.controller");
const typeorm_1 = require("@nestjs/typeorm");
const ProfileAvatar_entity_1 = require("./entity/ProfileAvatar.entity");
const user_module_1 = require("../user/user.module");
let ProfileAvatarModule = class ProfileAvatarModule {
};
exports.ProfileAvatarModule = ProfileAvatarModule;
exports.ProfileAvatarModule = ProfileAvatarModule = __decorate([
    (0, common_1.Module)({
        controllers: [profile_avatar_controller_1.ProfileAvatarController],
        providers: [profile_avatar_service_1.ProfileAvatarService],
        imports: [
            typeorm_1.TypeOrmModule.forFeature([ProfileAvatar_entity_1.ProfileAvatarEntity]),
            user_module_1.UserModule
        ]
    })
], ProfileAvatarModule);
//# sourceMappingURL=profile-avatar.module.js.map