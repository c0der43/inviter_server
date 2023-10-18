import { Injectable } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { EventFileEntity } from "./entity/eventFile.entity";

@Injectable()
export class EventFileService {

  constructor(
    @InjectRepository(EventFileEntity)
    private repository: Repository<EventFileEntity>
  ) {}

  async create(eventId: number, file: Express.Multer.File){
    return this.repository.save({
      fileName: file.filename,
      mimeType: file.mimetype,
      size: file.size,
      event: {id: eventId}
    });
  }
}
