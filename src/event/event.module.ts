import { Module } from '@nestjs/common';
import { EventService } from './event.service';
import { EventController } from './event.controller';
import { TypeOrmModule } from "@nestjs/typeorm";
import { EventEntity } from "./entity/Event.entity";
import { UserModule } from "../user/user.module";
import { TagModule } from "../tag/tag.module";
import { EventFileModule } from "../event-file/event-file.module";

@Module({
  controllers: [EventController],
  providers: [EventService],
  imports: [
    TypeOrmModule.forFeature([EventEntity]),
    UserModule,
    EventFileModule,
    TagModule
  ],
  exports: [EventService]
})
export class EventModule {}
