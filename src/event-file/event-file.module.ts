import { Module } from '@nestjs/common';
import { EventFileService } from './event-file.service';
import { EventFileController } from './event-file.controller';
import { TypeOrmModule } from "@nestjs/typeorm";
import { EventFileEntity } from "./entity/eventFile.entity";

@Module({
  controllers: [EventFileController],
  providers: [EventFileService],
  imports: [TypeOrmModule.forFeature([EventFileEntity])],
  exports: [EventFileService]
})
export class EventFileModule {}
