import { Module } from '@nestjs/common';
import { WorkspacesService } from './workspaces.service';
import { WorkspacesController } from './workspaces.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Workspace } from './entities/workspace.entity';
import { ReservationsModule } from '../reservations/reservations.module';

@Module({
  imports:[
    TypeOrmModule.forFeature([Workspace]),
    
  ],
  controllers: [WorkspacesController],
  providers: [WorkspacesService],
  exports:[TypeOrmModule]
})
export class WorkspacesModule {}
