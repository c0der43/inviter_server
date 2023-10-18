import { UserEntity } from "../../user/entity/user.entity";
import { EventFileEntity } from "../../event-file/entity/eventFile.entity";
import { TagEntity } from "../../tag/entity/tag.entity";
import { EventTransactionEntity } from "../../join-event-transaction/entity/EventTransactionEntity";
import { CommentEntity } from "../../comment/entity/Comment.entity";
export declare class EventEntity {
    id: number;
    name: string;
    desc: string;
    date: string;
    time: string;
    duration: string;
    locationName: string;
    locationLat: string;
    locationLng: string;
    maxMember: number;
    creator: UserEntity;
    created_at: Date;
    previewFile: EventFileEntity;
    invitedCurators: UserEntity[];
    users: EventTransactionEntity[];
    tags: TagEntity[];
    comments: CommentEntity[];
}
