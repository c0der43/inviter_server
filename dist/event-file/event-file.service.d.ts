/// <reference types="multer" />
import { Repository } from "typeorm";
import { EventFileEntity } from "./entity/eventFile.entity";
export declare class EventFileService {
    private repository;
    constructor(repository: Repository<EventFileEntity>);
    create(eventId: number, file: Express.Multer.File): Promise<{
        fileName: string;
        mimeType: string;
        size: number;
        event: {
            id: number;
        };
    } & EventFileEntity>;
}
