import { UserEntity } from "../../user/entity/user.entity";
import { CommentLikeEntity } from "../../comments-like-dislike-transaction/entity/CommentLikeEntity";
import { EventEntity } from "../../event/entity/Event.entity";
export declare class CommentEntity {
    id: number;
    text: string;
    user: UserEntity;
    event: EventEntity;
    likesCount: number;
    likes: CommentLikeEntity[];
    create_at: string;
}
