import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SessionsService } from './sessions.service';
import { Session } from './entities/session.entity';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('sessions') 
@Controller('sessions')
export class SessionsController {
  constructor(private readonly sessionsService: SessionsService) {}

  @Get()
  findAll() {
    return this.sessionsService.findAll();
  }

  @Get('most-occupied')
  async getSessionsOrderedByMostOccupied(): Promise<Session[]> {
    return this.sessionsService.findSessionsOrderedByMostOccupied();
  }

  @Get('most-available')
  async getSessionsOrderedByMostAvailable(): Promise<Session[]> {
    return this.sessionsService.findSessionsOrderedByMostAvailable();
  }

}
