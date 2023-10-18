import { AuthService } from './auth.service';
import { CreateUserDto } from "../user/dto/CreateUser.dto";
import { LoginDto } from "./dto/login.dto";
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    registration(dto: CreateUserDto): Promise<{
        token: string;
    }>;
    login(dto: LoginDto): Promise<import("@nestjs/common").HttpException | {
        token: string;
    }>;
}
