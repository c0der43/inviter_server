import { Controller } from '@nestjs/common';
import { EventFileService } from './event-file.service';

@Controller('event-file')
export class EventFileController {
  constructor(private readonly eventFileService: EventFileService) {}
}
