import { Controller, Param, Post, UseGuards } from "@nestjs/common";
import { EventTransactionService } from './event-transaction.service';
import { JwtAuthGuard } from "../guards/jwt-guard";
import { UserId } from "../decorators/user_id.decorator";

@Controller('event_transaction')
export class EventTransactionController {
  constructor(private readonly joinEventTransactionService: EventTransactionService) {}

  @UseGuards(JwtAuthGuard)
  @Post('/join/:id')
  joinToEvent(
    @UserId() userId: number,
    @Param('id') eventId: number
  ){
    return this.joinEventTransactionService.joinToEvent(userId, eventId);
  }
}
