import { EventTransactionService } from './event-transaction.service';
export declare class EventTransactionController {
    private readonly joinEventTransactionService;
    constructor(joinEventTransactionService: EventTransactionService);
    joinToEvent(userId: number, eventId: number): Promise<{
        event: {
            id: number;
        };
        user: {
            id: number;
        };
    } & import("./entity/EventTransactionEntity").EventTransactionEntity>;
}
