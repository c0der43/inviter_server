import { TagEntity } from "./entity/tag.entity";
import { Repository } from "typeorm";
import { CreateTagDto } from "./dto/CreateTag.dto";
export declare class TagService {
    private repository;
    constructor(repository: Repository<TagEntity>);
    create(dto: CreateTagDto): Promise<CreateTagDto & TagEntity>;
    getAllTag(): Promise<TagEntity[]>;
    getTagsById(ids: Array<number>): Promise<TagEntity[]>;
    getTagsByName(name: string): Promise<TagEntity[]>;
}
