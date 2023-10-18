import { UserEntity } from "../../user/entity/user.entity";
export declare class ProfileAvatarEntity {
    id: number;
    fileName: string;
    mimeType: string;
    size: number;
    user: UserEntity;
}
