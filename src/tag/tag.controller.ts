import { Body, Controller, Get, Post, Query, UsePipes, ValidationPipe } from "@nestjs/common";
import { TagService } from './tag.service';
import { CreateTagDto } from "./dto/CreateTag.dto";

@Controller('tag')
export class TagController {
  constructor(private readonly tagService: TagService) {}

  @Post('/create')
  create(
    @Body() dto: CreateTagDto
  ){
    return this.tagService.create(dto);
  }

  @Get('/all')
  getAll(){
    return this.tagService.getAllTag();
  }

  @Get('/by')
  getTagsByName(
    @Query('name') name: string
  ){
    return this.tagService.getTagsByName(name);
  }
}
