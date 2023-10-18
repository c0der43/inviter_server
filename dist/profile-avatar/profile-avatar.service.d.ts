/// <reference types="multer" />
import { ProfileAvatarEntity } from "./entity/ProfileAvatar.entity";
import { Repository } from "typeorm";
import { UserService } from "../user/user.service";
export declare class ProfileAvatarService {
    private readonly repository;
    private readonly userService;
    constructor(repository: Repository<ProfileAvatarEntity>, userService: UserService);
    addAvatar(userId: number, file: Express.Multer.File): Promise<import("typeorm").UpdateResult | ({
        fileName: string;
        mimeType: string;
        size: number;
        user: {
            id: number;
        };
    } & ProfileAvatarEntity)>;
    findUserAvatar(userId: number): Promise<ProfileAvatarEntity>;
}
