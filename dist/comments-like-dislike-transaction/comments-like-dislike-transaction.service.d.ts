import { CommentLikeEntity } from "./entity/CommentLikeEntity";
import { Repository } from "typeorm";
import { UserService } from "../user/user.service";
import { CommentService } from "../comment/comment.service";
export declare class CommentsLikeDislikeTransactionService {
    private readonly repository;
    private readonly userService;
    protected readonly commentService: CommentService;
    constructor(repository: Repository<CommentLikeEntity>, userService: UserService, commentService: CommentService);
    likeCommentById(commentId: number, userId: number): Promise<import("typeorm").UpdateResult>;
}
