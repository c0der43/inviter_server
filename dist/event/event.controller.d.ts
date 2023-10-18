/// <reference types="multer" />
import { EventService } from './event.service';
import { CreateEventDto } from "./dto/CreateEvent.dto";
export declare class EventController {
    private readonly eventService;
    constructor(eventService: EventService);
    create(dto: CreateEventDto, userId: number, file: Express.Multer.File): Promise<any>;
    getAllEvents(): Promise<import("./entity/Event.entity").EventEntity[]>;
    getMyEvents(userId: number): Promise<import("./entity/Event.entity").EventEntity[]>;
    getAllEventsWithPagination(page: number, limit: number, name: string): Promise<import("./entity/Event.entity").EventEntity[]>;
    getEventById(id: number): Promise<import("./entity/Event.entity").EventEntity>;
    getEventsByName(name: string): Promise<import("./entity/Event.entity").EventEntity[]>;
}
