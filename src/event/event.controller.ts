import {
  Body,
  Controller, Get, Param,
  Post, Query, UploadedFile,
  UseGuards,
  UseInterceptors,
  UsePipes,
  ValidationPipe
} from "@nestjs/common";
import { EventService } from './event.service';
import { CreateEventDto } from "./dto/CreateEvent.dto";
import { JwtAuthGuard } from "../guards/jwt-guard";
import { UserId } from "../decorators/user_id.decorator";
import { FileInterceptor } from "@nestjs/platform-express";
import { eventFileStorage } from "../event-file/storage_event";

@Controller('event')
export class EventController {
  constructor(private readonly eventService: EventService) {}

  @Post('/create')
  @UseGuards(JwtAuthGuard)
  @UsePipes(new ValidationPipe())
  @UseInterceptors(
    FileInterceptor('file', {
      storage: eventFileStorage
    })
  )
  create(
    @Body() dto: CreateEventDto,
    @UserId() userId: number,
    @UploadedFile() file: Express.Multer.File
  ){
    return this.eventService.createEvent(dto, userId, file);
  }

  @Get('/all')
  getAllEvents(){
    return this.eventService.getAllEvents();
  }

  @Get('/my')
  @UseGuards(JwtAuthGuard)
  getMyEvents(
    @UserId() userId: number
  ){
    return this.eventService.getEventsByUserId(userId);
  }

  @Get('/pagination')
  getAllEventsWithPagination(
    @Query('page') page: number,
    @Query('limit') limit: number,
    @Query('name') name: string
  ){
    return this.eventService.getAllEventsWithPagination(page, limit, name);
  }

  @Get('/id/:id')
  getEventById(
    @Param('id') id: number
  ){
    return this.eventService.findEventById(id);
  }

  @Get('/name/:name')
  getEventsByName(
    @Param('name') name: string
  ){
    return this.eventService.findEventByName(name);
  }
}
