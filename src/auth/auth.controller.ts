import { Body, Controller, Post, UseGuards, UsePipes, ValidationPipe } from "@nestjs/common";
import { AuthService } from './auth.service';
import { CreateUserDto } from "../user/dto/CreateUser.dto";
import { LoginDto } from "./dto/login.dto";
import { JwtAuthGuard } from "../guards/jwt-guard";

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/registration')
  @UsePipes(new ValidationPipe())
  registration(
    @Body() dto: CreateUserDto
  ){
    return this.authService.registration(dto);
  }

  @Post('/login')
  @UsePipes(new ValidationPipe())
  login(
    @Body() dto: LoginDto
  ){
    return this.authService.login(dto);
  }
}
