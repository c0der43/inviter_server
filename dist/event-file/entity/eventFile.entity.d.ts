import { EventEntity } from "../../event/entity/Event.entity";
export declare class EventFileEntity {
    id: number;
    fileName: string;
    mimeType: string;
    size: number;
    event: EventEntity;
}
