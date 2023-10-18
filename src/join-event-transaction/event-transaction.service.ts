import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { EventTransactionEntity } from "./entity/EventTransactionEntity";
import { Repository } from "typeorm";
import { EventService } from "../event/event.service";
import { UserService } from "../user/user.service";

@Injectable()
export class EventTransactionService {

  constructor(
    @InjectRepository(EventTransactionEntity)
    private readonly repository: Repository<EventTransactionEntity>,
    private readonly eventService: EventService,
    private readonly userService: UserService
  ) {}

  async joinToEvent(userId: number, eventId: number){
    const user = await this.userService.getUserById(userId);
    const event = await this.eventService.findEventById(eventId);

    const eqlJoin = await this.findTransactionByEventIdAndUserId(userId, eventId);

    if(eqlJoin){
      throw new HttpException('Вы уже присоеденились к этому ивенту!', HttpStatus.BAD_REQUEST);
    }

    if(event.creator.id == userId){
      throw new HttpException('Создатель ивента не может присоедениться к нему!', HttpStatus.BAD_REQUEST);
    }

    return await this.repository.save({
      event: {id: event.id},
      user: {id: user.id}
    });
  }

  async findTransactionByEventIdAndUserId(userId: number, eventId: number){
    return await this
      .repository
      .createQueryBuilder('qb')
      .leftJoinAndSelect('qb.user', 'user')
      .leftJoinAndSelect('qb.event', 'event')
      .andWhere('user.id = :userId',{userId})
      .andWhere('event.id = :eventId', {eventId})
      .getOne();
  }
}
