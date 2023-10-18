import { Injectable } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { ProfileAvatarEntity } from "./entity/ProfileAvatar.entity";
import { Repository } from "typeorm";
import { UserService } from "../user/user.service";
import *as path from "path";
import * as fs from "fs";

@Injectable()
export class ProfileAvatarService {
  constructor(
    @InjectRepository(ProfileAvatarEntity)
    private readonly repository: Repository<ProfileAvatarEntity>,
    private readonly userService: UserService
  ) {}

  async addAvatar(userId: number, file: Express.Multer.File){
    console.log(file)
    const absolutePath = path.resolve(file.path);
    const user = await this.userService.getUserById(userId);
    const findAvatar = await this.findUserAvatar(user.id);

    if(findAvatar){
      //сделать удаление предыдущей картинки из папки
      return await this.repository.update(findAvatar, {
        fileName: file.filename,
        mimeType: file.mimetype,
        size: file.size
      });
    }

    return await this.repository.save({
      fileName: file.filename,
      mimeType: file.mimetype,
      size: file.size,
      user: {id: user.id}
    });
  }

  async findUserAvatar(userId: number){
    return await this
      .repository
      .createQueryBuilder('qb')
      .leftJoinAndSelect('qb.user', 'user')
      .andWhere('user.id = :id',{id: userId})
      .getOne();
  }
}
