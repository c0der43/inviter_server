import { CommentEntity } from "../../comment/entity/Comment.entity";
import { UserEntity } from "../../user/entity/user.entity";
export declare class CommentLikeEntity {
    id: number;
    user: UserEntity;
    comment: CommentEntity;
}
