import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RoomsService } from './rooms.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('rooms') 
@Controller('rooms')
export class RoomsController {
  constructor(private readonly roomsService: RoomsService) {}


  @Get()
  findAll() {
    return this.roomsService.findAll();
  }

}
