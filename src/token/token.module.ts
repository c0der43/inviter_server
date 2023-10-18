import { Module } from '@nestjs/common';
import { TokenService } from './token.service';
import { TokenController } from './token.controller';
import { TypeOrmModule } from "@nestjs/typeorm";
import { TokenEntity } from "./entity/token.entity";
import { JwtService } from "@nestjs/jwt";

@Module({
  controllers: [TokenController],
  providers: [TokenService, JwtService],
  imports: [
    TypeOrmModule.forFeature([TokenEntity])
  ],
  exports: [TokenService]
})
export class TokenModule {}
