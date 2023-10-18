import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { CreateUserDto } from "../user/dto/CreateUser.dto";
import { UserService } from "../user/user.service";
import * as bcrypt from 'bcrypt';
import { TokenService } from "../token/token.service";
import { LoginDto } from "./dto/login.dto";

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly tokenService: TokenService
  ) {}

  async registration(dto: CreateUserDto){
    const user = await this.userService.createUser({
      ...dto,
      password: await bcrypt.hash(dto.password, 15)
    });

    const token = await this.tokenService.generateJwtToken({
      id: user.id,
      firstName: user.firstName,
      email: user.email
    });

    await this.tokenService.saveToken(user.id, token);

    return {
      token: token
    }
  }


  async login(dto: LoginDto) {
    const findUser = await this.userService.findUserByEmail(dto.email);
    const passwordEql = await bcrypt.compare(dto.password, findUser.password);

    if(!passwordEql){
      throw new HttpException('Логин или пароль неверный!', HttpStatus.NOT_FOUND);
    }

    if(findUser && passwordEql){
      const token = await this.tokenService.generateJwtToken({
        id: findUser.id,
        firstName: findUser.firstName,
        email: findUser.email
      });

      await this.tokenService.updateToken(findUser.id, token);

      return {
        token: token
      }
    }

    return new HttpException('Неверный логин или пароль!', HttpStatus.BAD_REQUEST);
  }
}
