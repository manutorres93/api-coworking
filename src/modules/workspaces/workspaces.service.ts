import { Injectable } from '@nestjs/common';
import { CreateWorkspaceDto } from './dto/create-workspace.dto';
import { UpdateWorkspaceDto } from './dto/update-workspace.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Workspace } from './entities/workspace.entity';
import { In, Not, Repository } from 'typeorm';
import { Reservation } from '../reservations/entities/reservation.entity';

@Injectable()
export class WorkspacesService {

  constructor(    

    @InjectRepository(Workspace)
    private workspacesRepository: Repository<Workspace>,


    
  ) {}
  create(createWorkspaceDto: CreateWorkspaceDto) {
    return 'This action adds a new workspace';
  }

  async findAll() {
    return await this.workspacesRepository.find({ relations: ['room'] });
  }

  async findAvailableWorkspaces(roomId: number, sessionId: number): Promise<Workspace[]> {
    return this.workspacesRepository.createQueryBuilder('workspace')
        .leftJoinAndSelect('workspace.room', 'room')
        .leftJoin('workspace.reservation', 'reservation', 'reservation.session_id = :sessionId', { sessionId })
        .where('workspace.room_id = :roomId', { roomId })
        .andWhere('reservation.id IS NULL')
        .getMany();
}
async findAvailableWorkspacesBySession(sessionId: number): Promise<Workspace[]> {
  return this.workspacesRepository.createQueryBuilder('workspace')
  //.leftJoinAndSelect('workspace.room', 'room')
  .leftJoin('workspace.reservation', 'reservation', 'reservation.session_id = :sessionId', { sessionId })
  .where('reservation.id IS NULL')
  .getMany();
}

  async findOccupiedWorkspaces(roomId: number, sessionId: number): Promise<Workspace[]> {
    return await this.workspacesRepository
      .createQueryBuilder('workspace')
      .leftJoinAndSelect('workspace.room', 'room')
      .innerJoin('workspace.reservation', 'reservation', 'reservation.session_id = :sessionId', { sessionId })
      .where('workspace.room_id = :roomId', { roomId })
      .getMany();
}

  async findOccupiedWorkspacesBySession(sessionId: number): Promise<Workspace[]> {
    return this.workspacesRepository.createQueryBuilder('workspace')
      .innerJoin('workspace.reservation', 'reservation', 'reservation.session_id = :sessionId', { sessionId })
      .getMany();
}




  findOne(id: number) {
    return `This action returns a #${id} workspace`;
  }

  update(id: number, updateWorkspaceDto: UpdateWorkspaceDto) {
    return `This action updates a #${id} workspace`;
  }

  remove(id: number) {
    return `This action removes a #${id} workspace`;
  }
}
