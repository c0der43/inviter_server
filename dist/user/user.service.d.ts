import { UserEntity } from "./entity/user.entity";
import { Repository } from "typeorm";
import { CreateUserDto } from "./dto/CreateUser.dto";
export declare class UserService {
    private repository;
    constructor(repository: Repository<UserEntity>);
    createUser(dto: CreateUserDto): Promise<CreateUserDto & UserEntity>;
    findUserByEmail(email: string): Promise<UserEntity>;
    getMe(userId: number): Promise<UserEntity>;
    getUserById(id: number): Promise<UserEntity>;
    getAllUsers(): Promise<UserEntity[]>;
    getUsersById(ids: Array<number>): Promise<UserEntity[]>;
    getUsersByNick(nick: string): Promise<UserEntity[]>;
    getUserByEmail(email: string): Promise<UserEntity>;
    deleteUserAccount(userId: number): Promise<import("typeorm").DeleteResult>;
}
