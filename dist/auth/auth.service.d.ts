import { HttpException } from "@nestjs/common";
import { CreateUserDto } from "../user/dto/CreateUser.dto";
import { UserService } from "../user/user.service";
import { TokenService } from "../token/token.service";
import { LoginDto } from "./dto/login.dto";
export declare class AuthService {
    private readonly userService;
    private readonly tokenService;
    constructor(userService: UserService, tokenService: TokenService);
    registration(dto: CreateUserDto): Promise<{
        token: string;
    }>;
    login(dto: LoginDto): Promise<HttpException | {
        token: string;
    }>;
}
