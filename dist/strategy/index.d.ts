import { TokenService } from "../token/token.service";
import { UserEntity } from "../user/entity/user.entity";
import { Strategy } from "passport-jwt";
import { ConfigService } from "@nestjs/config";
declare const JwtStrategy_base: new (...args: any[]) => Strategy;
export declare class JwtStrategy extends JwtStrategy_base {
    private readonly configService;
    private readonly tokenService;
    constructor(configService: ConfigService, tokenService: TokenService);
    validate(req: any, user: UserEntity): Promise<UserEntity>;
}
export {};
