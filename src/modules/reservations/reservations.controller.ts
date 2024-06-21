import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ReservationsService } from './reservations.service';
import { CreateReservationDto } from './dto/create-reservation.dto';
import { UpdateReservationDto } from './dto/update-reservation.dto';
import { Workspace } from '../workspaces/entities/workspace.entity';

@Controller('reservations')
export class ReservationsController {
  constructor(private readonly reservationsService: ReservationsService) {}

  @Post()
  create(@Body() createReservationDto: CreateReservationDto) {
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

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.reservationsService.findOne(+id);
  }



  @Patch(':id')
  update(@Param('id') id: string, @Body() updateReservationDto: UpdateReservationDto) {
    return this.reservationsService.update(+id, updateReservationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.reservationsService.remove(+id);
  }
}
