import { TokenEntity } from "../../token/entity/token.entity";
import { EventEntity } from "../../event/entity/Event.entity";
import { EventTransactionEntity } from "../../join-event-transaction/entity/EventTransactionEntity";
import { CommentEntity } from "../../comment/entity/Comment.entity";
import { CommentLikeEntity } from "../../comments-like-dislike-transaction/entity/CommentLikeEntity";
import { ProfileAvatarEntity } from "../../profile-avatar/entity/ProfileAvatar.entity";
import { UserRole } from "../types/UserRole";
export declare class UserEntity {
    id: number;
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    role: UserRole;
    avatar: ProfileAvatarEntity;
    createdEvents: EventEntity;
    token: TokenEntity;
    invitedAsCurator: EventEntity[];
    eventTransactions: EventTransactionEntity[];
    comments: CommentEntity[];
    commentActivity: CommentLikeEntity[];
}
