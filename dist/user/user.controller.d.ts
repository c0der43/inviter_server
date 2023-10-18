import { UserService } from './user.service';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    me(id: number): Promise<import("./entity/user.entity").UserEntity>;
    getAll(): Promise<import("./entity/user.entity").UserEntity[]>;
    getUsersByNick(nick: string): Promise<import("./entity/user.entity").UserEntity[]>;
    getUserByEmail(email: string): Promise<import("./entity/user.entity").UserEntity>;
    deleteMyAccount(userId: number): Promise<import("typeorm").DeleteResult>;
}
