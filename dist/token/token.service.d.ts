import { JwtService } from "@nestjs/jwt";
import { TokenEntity } from "./entity/token.entity";
import { Repository } from "typeorm";
import { ConfigService } from "@nestjs/config";
export declare class TokenService {
    private readonly jwtService;
    private readonly configService;
    private repository;
    constructor(jwtService: JwtService, configService: ConfigService, repository: Repository<TokenEntity>);
    generateJwtToken(user: any): Promise<string>;
    saveToken(userId: number, token: string): Promise<TokenEntity>;
    updateToken(userId: number, token: string): Promise<import("typeorm").UpdateResult>;
    existsToken(userId: number, token: string): Promise<boolean>;
}
