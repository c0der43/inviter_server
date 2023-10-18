import { Module } from '@nestjs/common';
import { EventTransactionService } from './event-transaction.service';
import { EventTransactionController } from './event-transaction.controller';
import { TypeOrmModule } from "@nestjs/typeorm";
import { EventTransactionEntity } from "./entity/EventTransactionEntity";
import { EventModule } from "../event/event.module";
import { UserModule } from "../user/user.module";

@Module({
  controllers: [EventTransactionController],
  providers: [EventTransactionService],
  imports: [
    TypeOrmModule.forFeature([EventTransactionEntity]),
    EventModule,
    UserModule
  ]
})
export class EventTransactionModule {}
