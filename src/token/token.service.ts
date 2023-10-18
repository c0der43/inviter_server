import { Injectable } from '@nestjs/common';
import { JwtService } from "@nestjs/jwt";
import { InjectRepository } from "@nestjs/typeorm";
import { TokenEntity } from "./entity/token.entity";
import { Repository } from "typeorm";
import { ConfigService } from "@nestjs/config";

@Injectable()
export class TokenService {

  constructor(
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService,

    @InjectRepository(TokenEntity)
    private repository: Repository<TokenEntity>
  ) {}

  async generateJwtToken(user: any) {
    return this.jwtService.sign(user, {
      secret: this.configService.get('SECRET_KEY'),
      expiresIn: '7d'
    });
  }

  async saveToken(userId: number, token: string): Promise<TokenEntity> {
    return await this.repository.save({
      user: { id: userId },
      token: token
    });
  }

  async updateToken(userId: number, token: string) {
    const qb = this.repository.createQueryBuilder('qb');

    const findToken = await qb
      .leftJoinAndSelect('qb.user', 'user')
      .where('user.id = :id', { id: userId })
      .getOne();

    if (!findToken) {
      await this.saveToken(userId, token);
    }

    return await this.repository.update(findToken.id, { token: token });
  }

  async existsToken(userId: number, token: string): Promise<boolean> {
    const qb = this.repository.createQueryBuilder('qb');

    const findToken = await qb
      .where('qb.token = :token', { token })
      // .leftJoinAndSelect('qb.user', 'user')
      .andWhere('qb.user.id = :id', { id: userId })
      .getOne();

    if (!findToken) {
      return false;
    }

    return true;
  }
}
