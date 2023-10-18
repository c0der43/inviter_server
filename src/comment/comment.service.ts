import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CommentEntity } from "./entity/Comment.entity";
import { Repository } from "typeorm";
import { CreateCommentDto } from "./dto/CreateComment.dto";
import { EventService } from "../event/event.service";
import { UserService } from "../user/user.service";

@Injectable()
export class CommentService {
  constructor(
    @InjectRepository(CommentEntity)
    private repository: Repository<CommentEntity>,
    private eventService: EventService,
    private userService: UserService
  ) {}

  async createComment(dto: CreateCommentDto, userId: number){
    const findEvent = await this.eventService.findEventById(dto.eventId);
    const user = await this.userService.getUserById(userId);

    return await this.repository.save({
      user: {id: user.id},
      event: {id: findEvent.id},
      text: dto.text
    });
  }

  async getCommentsByEventId(eventId: number){
    const findEvent = await this.eventService.findEventById(eventId);

    return this.repository
      .createQueryBuilder('qb')
      .leftJoin('qb.event', 'event')
      .andWhere('event.id = :id',{id: findEvent.id})
      .leftJoinAndSelect('qb.user','user')
      .leftJoinAndSelect('user.avatar', 'avatar')
      .getMany();
  }

  async deleteMyComment(userId: number, commentId: number){
    const findMe = await this.userService.getUserById(userId);
    const comment = await this.getCommentById(commentId);

    if(findMe.id !== comment.user.id){
      throw new HttpException('Удалить комментарий может только пользователь, который добавил этот коментарий!', HttpStatus.NOT_FOUND);
    }

    return await this.repository.delete(comment.id);
  }

  async getCommentById(commentId: number){
    const findComment = await this.repository
      .createQueryBuilder('qb')
      .where('qb.id = :id', {id: commentId})
      .leftJoinAndSelect('qb.user', 'user')
      .getOne();

    if(!findComment){
      throw new HttpException('Не удалось найти комментарий с таким id!', HttpStatus.NOT_FOUND);
    }

    return findComment;
  }

  async addOneLikesComment(commentId: number){
    const findComment = await this.getCommentById(commentId);
    return await this.repository.update(findComment.id, {
      likesCount: findComment.likesCount + 1
    });
  }
}
