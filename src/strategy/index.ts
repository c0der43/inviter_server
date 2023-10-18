import { PassportStrategy } from "@nestjs/passport";
import { Injectable, UnauthorizedException } from "@nestjs/common";
import { TokenService } from "../token/token.service";
import { UserEntity } from "../user/entity/user.entity";
import { Strategy, ExtractJwt } from "passport-jwt";
import { ConfigService } from "@nestjs/config";


@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {

  constructor(
    private readonly configService: ConfigService,
    private readonly tokenService: TokenService
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: configService.get('SECRET_JWT'),
      passReqToCallback: true
    });
  }

  async validate(req, user: UserEntity){
    const token = req.headers.authorization.slice(7);
    const tokenExists = await this.tokenService.existsToken(user.id, token);
    if(tokenExists){
      return user;
    }else{
      throw new UnauthorizedException();
    }
  }
}
