import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ReservationsService } from './reservations.service';

import { Workspace } from '../workspaces/entities/workspace.entity';
import { ApiTags } from '@nestjs/swagger';
import { CreateReservationDto } from './dto/create-reservation.dto';
import { Reservation } from './entities/reservation.entity';
import { Relation } from 'typeorm';

@ApiTags('reservations') 
@Controller('reservations')
export class ReservationsController {
  constructor(private readonly reservationsService: ReservationsService) {}

  @Post()
  async create(@Body() createReservationDto: CreateReservationDto): Promise<Reservation[]> {
    return this.reservationsService.create(createReservationDto);
  }

  @Get()
  findAll() {
    return this.reservationsService.findAll();
  }

  @Get('user/:userId/workspaces')
  async getWorkspacesByUserId(@Param('userId') userId: number): Promise<Workspace[]> {
    return this.reservationsService.findWorkspacesByUserId(userId);
  }

  @Get('session/:sessionId/workspaces')
  async getWorkspacesBySessionId(@Param('sessionId') sessionId: number): Promise<Workspace[]> {
    return this.reservationsService.findWorkspacesBySessionId(sessionId);
  }

}
