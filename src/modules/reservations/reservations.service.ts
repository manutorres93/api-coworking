import { Injectable } from '@nestjs/common';
import { CreateReservationDto } from './dto/create-reservation.dto';
import { UpdateReservationDto } from './dto/update-reservation.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Reservation } from './entities/reservation.entity';
import { Repository } from 'typeorm';
import { Workspace } from '../workspaces/entities/workspace.entity';

@Injectable()
export class ReservationsService {

  constructor(    

    @InjectRepository(Reservation)
    private reservationRepository: Repository<Reservation>,

    @InjectRepository(Workspace)
    private readonly workspacesRepository: Repository<Workspace>,
    
  ) {}
  create(createReservationDto: CreateReservationDto) {
    return 'This action adds a new reservation';
  }

  async findAll() {
    return await this.reservationRepository.find( { relations:{ session: true, user:true }} );
  }

  async findWorkspacesByUserId(userId: number): Promise<Workspace[]> {
    return this.workspacesRepository.createQueryBuilder('workspace')
      .innerJoin('workspace.reservation', 'reservation', 'reservation.user_id = :userId', { userId })
      .select(['workspace.id', 'workspace.row_num', 'workspace.column_num'])
      .getMany();
  }

  async findWorkspacesBySessionId(sessionId: number): Promise<Workspace[]> {
    return this.workspacesRepository.createQueryBuilder('workspace')
      .innerJoin('workspace.reservation', 'reservation', 'reservation.session_id = :sessionId', { sessionId })
      .select(['workspace.id', 'workspace.row_num', 'workspace.column_num'])
      .getMany();
  }


  findOne(id: number) {
    return `This action returns a #${id} reservation`;
  }

  update(id: number, updateReservationDto: UpdateReservationDto) {
    return `This action updates a #${id} reservation`;
  }

  remove(id: number) {
    return `This action removes a #${id} reservation`;
  }
}
