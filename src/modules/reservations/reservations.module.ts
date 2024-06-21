import { Module } from '@nestjs/common';
import { ReservationsService } from './reservations.service';
import { ReservationsController } from './reservations.controller';
import { Reservation } from './entities/reservation.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WorkspacesModule } from '../workspaces/workspaces.module';
import { UsersModule } from '../users/users.module';
import { SessionsModule } from '../sessions/sessions.module';

@Module({
  imports:[
    TypeOrmModule.forFeature([Reservation]), WorkspacesModule, UsersModule, SessionsModule
    
  ],
  controllers: [ReservationsController],
  providers: [ReservationsService],
  exports:[TypeOrmModule]
})
export class ReservationsModule {}
