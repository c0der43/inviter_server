import { EventTransactionEntity } from "./entity/EventTransactionEntity";
import { Repository } from "typeorm";
import { EventService } from "../event/event.service";
import { UserService } from "../user/user.service";
export declare class EventTransactionService {
    private readonly repository;
    private readonly eventService;
    private readonly userService;
    constructor(repository: Repository<EventTransactionEntity>, eventService: EventService, userService: UserService);
    joinToEvent(userId: number, eventId: number): Promise<{
        event: {
            id: number;
        };
        user: {
            id: number;
        };
    } & EventTransactionEntity>;
    findTransactionByEventIdAndUserId(userId: number, eventId: number): Promise<EventTransactionEntity>;
}
