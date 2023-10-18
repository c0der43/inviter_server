/// <reference types="multer" />
import { ProfileAvatarService } from './profile-avatar.service';
export declare class ProfileAvatarController {
    private readonly profileAvatarService;
    constructor(profileAvatarService: ProfileAvatarService);
    addAvatar(userId: number, file: Express.Multer.File): Promise<import("typeorm").UpdateResult | ({
        fileName: string;
        mimeType: string;
        size: number;
        user: {
            id: number;
        };
    } & import("./entity/ProfileAvatar.entity").ProfileAvatarEntity)>;
}
