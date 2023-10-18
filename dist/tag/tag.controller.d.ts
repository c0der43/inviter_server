import { TagService } from './tag.service';
import { CreateTagDto } from "./dto/CreateTag.dto";
export declare class TagController {
    private readonly tagService;
    constructor(tagService: TagService);
    create(dto: CreateTagDto): Promise<CreateTagDto & import("./entity/tag.entity").TagEntity>;
    getAll(): Promise<import("./entity/tag.entity").TagEntity[]>;
    getTagsByName(name: string): Promise<import("./entity/tag.entity").TagEntity[]>;
}
