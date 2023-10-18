import { Controller, Post, UploadedFile, UseGuards, UseInterceptors } from "@nestjs/common";
import { ProfileAvatarService } from './profile-avatar.service';
import { JwtAuthGuard } from "../guards/jwt-guard";
import { FileInterceptor } from "@nestjs/platform-express";
import { UserId } from "../decorators/user_id.decorator";
import { avatarFileStorage } from "./storage/avatarStorage";

@Controller('profile-avatar')
export class ProfileAvatarController {
  constructor(private readonly profileAvatarService: ProfileAvatarService) {}

  @Post('/add')
  @UseGuards(JwtAuthGuard)
  @UseInterceptors(
    FileInterceptor('file', {
      storage: avatarFileStorage
    })
  )
  addAvatar(
    @UserId() userId: number,
    @UploadedFile() file: Express.Multer.File
  ){
    return this.profileAvatarService.addAvatar(userId, file);
  }
}
