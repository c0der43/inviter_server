import { EventEntity } from "../../event/entity/Event.entity";
import { UserEntity } from "../../user/entity/user.entity";
export declare class EventTransactionEntity {
    id: number;
    event: EventEntity;
    user: UserEntity;
    create_at: string;
}
