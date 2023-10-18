/// <reference types="multer" />
import { EventEntity } from "./entity/Event.entity";
import { Repository } from "typeorm";
import { CreateEventDto } from "./dto/CreateEvent.dto";
import { UserService } from "../user/user.service";
import { EventFileService } from "../event-file/event-file.service";
import { TagService } from "../tag/tag.service";
export declare class EventService {
    private readonly repository;
    private readonly userService;
    private readonly eventFileService;
    private readonly tagService;
    constructor(repository: Repository<EventEntity>, userService: UserService, eventFileService: EventFileService, tagService: TagService);
    createEvent(dto: CreateEventDto, userId: number, file: Express.Multer.File): Promise<any>;
    findEventById(eventId: number): Promise<EventEntity>;
    getAllEvents(): Promise<EventEntity[]>;
    getAllEventsWithPagination(page: number, limit: number, name: string): Promise<EventEntity[]>;
    findEventByName(name: string): Promise<EventEntity[]>;
    getEventsByUserId(userId: number): Promise<EventEntity[]>;
}
