import { Module } from '@nestjs/common';
import { ProfileAvatarService } from './profile-avatar.service';
import { ProfileAvatarController } from './profile-avatar.controller';
import { TypeOrmModule } from "@nestjs/typeorm";
import { ProfileAvatarEntity } from "./entity/ProfileAvatar.entity";
import { UserModule } from "../user/user.module";

@Module({
  controllers: [ProfileAvatarController],
  providers: [ProfileAvatarService],
  imports: [
    TypeOrmModule.forFeature([ProfileAvatarEntity]),
    UserModule
  ]
})
export class ProfileAvatarModule {}
