import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { TagEntity } from "./entity/tag.entity";
import { Repository } from "typeorm";
import { CreateTagDto } from "./dto/CreateTag.dto";

@Injectable()
export class TagService {

  constructor(
    @InjectRepository(TagEntity)
    private repository: Repository<TagEntity>
  ) {}


  async create(dto: CreateTagDto){
    const findTag = await this.repository.findOne({where: {name: dto.name}});

    if(findTag){
      throw new HttpException('Тег с таким названием уже существует', HttpStatus.BAD_REQUEST);
    }

    return await this.repository.save(dto);
  }

  async getAllTag(){
    return this.repository.find();
  }

  async getTagsById(ids: Array<number>){
    return await this.repository
      .createQueryBuilder('tag')
      .where('tag.id IN (:...ids)', {ids})
      .getMany();
  }

  async getTagsByName(name: string){
    const tags = await this.repository.find();
    return tags.filter(tag => tag.name.toLowerCase().includes(name.toLowerCase()))
  }
}
