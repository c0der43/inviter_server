import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { EventEntity } from "./entity/Event.entity";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateEventDto } from "./dto/CreateEvent.dto";
import { UserService } from "../user/user.service";
import * as fs from "fs";
import * as path from "path";
import { EventFileService } from "../event-file/event-file.service";
import { TagService } from "../tag/tag.service";
import { convertStringNumbersToArrayNumber } from "../utils/utils";

@Injectable()
export class EventService {

  constructor(
    @InjectRepository(EventEntity)
    private readonly repository: Repository<EventEntity>,
    private readonly userService: UserService,
    private readonly eventFileService: EventFileService,
    private readonly tagService: TagService
  ) {}
  async createEvent(dto: CreateEventDto, userId: number, file: Express.Multer.File){
    const absolutePath = path.resolve(file.path);
    try {

      const findUser = await this.userService.getUserById(userId);

      const curators = await this.userService.getUsersById(
        typeof dto.invitedCurators === 'string' ?
          convertStringNumbersToArrayNumber(dto.invitedCurators) :
          dto.invitedCurators
      );

      const tags = await this.tagService.getTagsById(
        typeof dto.tags === 'string' ?
          convertStringNumbersToArrayNumber(dto.tags) :
          dto.tags
      );

      const event =  await this.repository.save({
        ...dto,
        creator: {id: findUser.id},
        invitedCurators: curators,
        tags: tags,
      });

      await this.eventFileService.create(event.id, file);

      return event;
    }catch (error) {
      console.log(error);
      fs.unlinkSync(absolutePath);
      return error;
     }
  }

  async findEventById(eventId: number){
    const qb = this.repository.createQueryBuilder('qb');

    const findEvent = await qb
      .where('qb.id = :id', {id: eventId})
      .leftJoinAndSelect('qb.previewFile','previewFile')
      .leftJoinAndSelect('qb.invitedCurators', 'invitedCurators')
      .leftJoinAndSelect('qb.tags', 'tags')
      .leftJoinAndSelect('qb.creator', 'creator')
      .leftJoinAndSelect('qb.users', 'users')
      .leftJoinAndSelect('users.user','user')
      .getOne();

    if(!findEvent){
      throw new HttpException('Не удалось найти event с таким id!', HttpStatus.BAD_REQUEST);
    }

    return findEvent;
  }

  async getAllEvents() {
    const qb = this.repository.createQueryBuilder('qb');

    return await qb
      .leftJoinAndSelect('qb.tags','tags')
      .leftJoinAndSelect('qb.previewFile', 'previewFile')
      .leftJoinAndSelect('qb.creator', 'creator')
      .getMany()
  }

  async getAllEventsWithPagination(
    page: number,
    limit: number,
    name: string,
  ){
    return await this.repository
      .createQueryBuilder('qb')
      .leftJoinAndSelect('qb.tags','tags')
      .leftJoinAndSelect('qb.previewFile', 'previewFile')
      .leftJoinAndSelect('qb.creator', 'creator')
      .leftJoinAndSelect('qb.invitedCurators', 'invitedCurators')
      .where('qb.name LIKE :name', {name: `%${name}%`})
      .take(limit)
      .skip((page - 1) * limit)
      .getMany();
  }

  async findEventByName(name: string){
    return await this.repository
      .createQueryBuilder('qb')
      .leftJoinAndSelect('qb.tags','tags')
      .leftJoinAndSelect('qb.previewFile', 'previewFile')
      .leftJoinAndSelect('qb.creator', 'creator')
      .leftJoinAndSelect('qb.invitedCurators', 'invitedCurators')
      .where('qb.name LIKE :name', {name: `%${name}%`})
      .getMany();
  }

  async getEventsByUserId(userId: number){
    const findUser = await this.userService.getUserById(userId);
    const qb = await this.repository.createQueryBuilder('qb');
    return await qb.leftJoin('qb.creator', 'creator')
      .andWhere('creator.id = :id', {id: findUser.id})
      .getMany();
  }
}
