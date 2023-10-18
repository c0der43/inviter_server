import { CommentEntity } from "./entity/Comment.entity";
import { Repository } from "typeorm";
import { CreateCommentDto } from "./dto/CreateComment.dto";
import { EventService } from "../event/event.service";
import { UserService } from "../user/user.service";
export declare class CommentService {
    private repository;
    private eventService;
    private userService;
    constructor(repository: Repository<CommentEntity>, eventService: EventService, userService: UserService);
    createComment(dto: CreateCommentDto, userId: number): Promise<{
        user: {
            id: number;
        };
        event: {
            id: number;
        };
        text: string;
    } & CommentEntity>;
    getCommentsByEventId(eventId: number): Promise<CommentEntity[]>;
    deleteMyComment(userId: number, commentId: number): Promise<import("typeorm").DeleteResult>;
    getCommentById(commentId: number): Promise<CommentEntity>;
    addOneLikesComment(commentId: number): Promise<import("typeorm").UpdateResult>;
}
