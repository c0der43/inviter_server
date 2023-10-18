import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { UserEntity } from "./entity/user.entity";
import { Repository } from "typeorm";
import { CreateUserDto } from "./dto/CreateUser.dto";

@Injectable()
export class UserService {

  constructor(
    @InjectRepository(UserEntity)
    private repository: Repository<UserEntity>
  ) {
  }

  async createUser(dto: CreateUserDto){
    const findUser = await this.repository.findOne({where:{email: dto.email}});
    //const findUserByNick = await  this.repository.findOne({where:{nick: dto.nick}});

    if(findUser){
      throw new HttpException('Пользователь с таким email уже существует!', HttpStatus.BAD_REQUEST);
    }

    // if(findUserByNick){
    //   throw new HttpException('Пользователь с таким ником уже существует!', HttpStatus.BAD_REQUEST);
    // }

    return await this.repository.save(dto);
  }

  async findUserByEmail(email: string) {
    const findUser = await this.repository.findOne({where: {email: email}});

    if(!findUser){
      throw new HttpException('Пользователь с таким email не был найден!', HttpStatus.NOT_FOUND);
    }

    return findUser;
  }


  async getMe(userId: number) {
    return await this.getUserById(userId);
  }
  async getUserById(id: number) {
    const qb = this.repository.createQueryBuilder('qb');

    const user = await qb
      .where('qb.id = :id', {id})
      .leftJoinAndSelect('qb.avatar', 'avatar')
      .getOne();

    if(!user){
          throw new HttpException('Пользователь не найден!', HttpStatus.BAD_REQUEST);
    }

    return user;
  }

  async getAllUsers(){
    const qb = this.repository.createQueryBuilder('qb');
    return await qb
      .leftJoinAndSelect('qb.invitedAsCurator', 'invitedAsCurator')
      .getMany();
  }

  async getUsersById(ids: Array<number>){
    if(ids.length == 0) return [];
    return await this.repository
      .createQueryBuilder('user')
      .where('user.id IN (:...ids)', {ids})
      .getMany();
  }

  async getUsersByNick(nick: string) {
    return await this.repository
      .createQueryBuilder('user')
      .where('user.name LIKE :nick', {nick: `%${nick}%`})
      .getMany();
  }

  async getUserByEmail(email: string) {
    return await this.repository
      .createQueryBuilder('user')
      .where('user.email = :email',{email})
      .getOne();
  }

  async deleteUserAccount(userId: number) {
    const findUser = await this.getUserById(userId);
    return await this.repository.delete(findUser);
  }
}
