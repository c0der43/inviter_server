import { CommentService } from './comment.service';
import { CreateCommentDto } from "./dto/CreateComment.dto";
export declare class CommentController {
    private readonly commentService;
    constructor(commentService: CommentService);
    createComment(dto: CreateCommentDto, userId: number): Promise<{
        user: {
            id: number;
        };
        event: {
            id: number;
        };
        text: string;
    } & import("./entity/Comment.entity").CommentEntity>;
    getComments(eventId: number): Promise<import("./entity/Comment.entity").CommentEntity[]>;
    deleteMyComment(commentId: number, userId: number): Promise<import("typeorm").DeleteResult>;
}
