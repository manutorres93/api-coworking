import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { WorkspacesService } from './workspaces.service';
import { CreateWorkspaceDto } from './dto/create-workspace.dto';
import { UpdateWorkspaceDto } from './dto/update-workspace.dto';
import { Workspace } from './entities/workspace.entity';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('workspaces') 
@Controller('workspaces')
export class WorkspacesController {
  constructor(private readonly workspacesService: WorkspacesService) {}
  @Get('available/room/:roomId/session/:sessionId')
  async findAvailableWorkspaces(
    @Param('roomId') roomId: number,
    @Param('sessionId') sessionId: number,
  ) {
    return this.workspacesService.findAvailableWorkspaces(roomId, sessionId);
  }

  @Get('available/:sessionId')
  async findAvailableWorkspacesBySession(
    @Param('sessionId') sessionId: number,
  ) {
    return this.workspacesService.findAvailableWorkspacesBySession(sessionId);
  }

  @Get('occupied/room/:roomId/session/:sessionId')
  async findOccupiedWorkspaces(
    @Param('roomId') roomId: number,
    @Param('sessionId') sessionId: number,
  ): Promise<Workspace[]> {
    return this.workspacesService.findOccupiedWorkspaces(roomId, sessionId);
  }

  @Get('occupied/:sessionId')
  async findOccupiedWorkspacesBySession(@Param('sessionId') sessionId: number) {
    return this.workspacesService.findOccupiedWorkspacesBySession(sessionId);
  }


  @Get()
  findAll() {
    return this.workspacesService.findAll();
  }



}
