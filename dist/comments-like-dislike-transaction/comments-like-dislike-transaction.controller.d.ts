import { CommentsLikeDislikeTransactionService } from './comments-like-dislike-transaction.service';
export declare class CommentsLikeDislikeTransactionController {
    private readonly commentsLikeDislikeTransactionService;
    constructor(commentsLikeDislikeTransactionService: CommentsLikeDislikeTransactionService);
    addLike(commentId: number, userId: number): Promise<import("typeorm").UpdateResult>;
}
