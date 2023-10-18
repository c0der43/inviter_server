import { Controller, Delete, Get, Param, UseGuards } from "@nestjs/common";
import { UserService } from './user.service';
import { JwtAuthGuard } from "../guards/jwt-guard";
import { UserId } from "../decorators/user_id.decorator";

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('/me')
  @UseGuards(JwtAuthGuard)
  me(@UserId() id: number){
    return this.userService.getMe(id);
  }

  @Get('/all')
  getAll(){
    return this.userService.getAllUsers();
  }

  @Get('/byNick/:nick')
  getUsersByNick(
    @Param('nick') nick: string
  ){
    return this.userService.getUsersByNick(nick);
  }

  @Get('/byEmail/:email')
  getUserByEmail(
    @Param('email') email: string
  ){
    return this.userService.getUserByEmail(email);
  }

  @Delete('/me')
  @UseGuards(JwtAuthGuard)
  deleteMyAccount(
    @UserId() userId: number
  ){
    return this.userService.deleteUserAccount(userId);
  }
}
