import { BadRequestException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';

import { InjectRepository } from '@nestjs/typeorm';
import { Workspace } from './entities/workspace.entity';
import { In, Not, Repository } from 'typeorm';
import { Reservation } from '../reservations/entities/reservation.entity';
import { Session } from '../sessions/entities/session.entity';

@Injectable()
export class WorkspacesService {

  constructor(    

    @InjectRepository(Workspace)
    private workspacesRepository: Repository<Workspace>,

    @InjectRepository(Session)
    private sessionRepository: Repository<Session>,


    
  ) {}

  async findAll() {
    try {
      
      return await this.workspacesRepository.find({ relations: ['room'] });
    } catch (error) {
      throw new InternalServerErrorException('Error trying to find workspaces',error.message);
      
    }
  }

  async findAvailableWorkspaces(roomId: number, sessionId: number): Promise<Workspace[]> {

    const room = await this.workspacesRepository.findOne({ where: { id: roomId } });
    const session = await this.sessionRepository.findOne({ where: {id:sessionId} });

    if (!room || !session){
      throw new NotFoundException('ID for room or session does not exist');
    }

    try {
      return this.workspacesRepository.createQueryBuilder('workspace')
          .leftJoinAndSelect('workspace.room', 'room')
          .leftJoin('workspace.reservation', 'reservation', 'reservation.session_id = :sessionId', { sessionId })
          .where('workspace.room_id = :roomId', { roomId })
          .andWhere('reservation.id IS NULL')
          .getMany();
      
    } catch (error) {

      throw new BadRequestException('Error trying to find available workspaces',error.message);
      
    }
}
async findAvailableWorkspacesBySession(sessionId: number): Promise<Workspace[]> {
  
  const session = await this.sessionRepository.findOne({ where: {id:sessionId} });

  if (!session){
    throw new NotFoundException('ID for session does not exist');
  }
  try {
    return this.workspacesRepository.createQueryBuilder('workspace')
    //.leftJoinAndSelect('workspace.room', 'room')
    .leftJoin('workspace.reservation', 'reservation', 'reservation.session_id = :sessionId', { sessionId })
    .where('reservation.id IS NULL')
    .getMany();
    
  } catch (error) {
    throw new BadRequestException('Error trying to find available workspaces',error.message);
  }
}

  async findOccupiedWorkspaces(roomId: number, sessionId: number): Promise<Workspace[]> {

    const room = await this.workspacesRepository.findOne({ where: { id: roomId } });
    const session = await this.sessionRepository.findOne({ where: {id:sessionId} });
    if (!room ||!session){
      throw new NotFoundException('ID for room or session does not exist');
    }

    try {
      return await this.workspacesRepository
        .createQueryBuilder('workspace')
        .leftJoinAndSelect('workspace.room', 'room')
        .innerJoin('workspace.reservation', 'reservation', 'reservation.session_id = :sessionId', { sessionId })
        .where('workspace.room_id = :roomId', { roomId })
        .getMany();
      
    } catch (error) {
      throw new BadRequestException('Error trying to find available workspaces',error.message);
    }
}

  async findOccupiedWorkspacesBySession(sessionId: number): Promise<Workspace[]> {
    const session = await this.sessionRepository.findOne({ where: {id:sessionId} });

    if (!session){
      throw new NotFoundException('ID for session does not exist');
    }

    try {
      return this.workspacesRepository.createQueryBuilder('workspace')
        .innerJoin('workspace.reservation', 'reservation', 'reservation.session_id = :sessionId', { sessionId })
        .getMany();
      
    } catch (error) {
      throw new BadRequestException('Error trying to find available workspaces',error.message);
    }
}




}
