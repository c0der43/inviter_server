import { UserEntity } from "../../user/entity/user.entity";
export declare class TokenEntity {
    id: number;
    token: string;
    user: UserEntity;
}
