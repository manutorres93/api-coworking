import { BadRequestException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { CreateReservationDto } from './dto/create-reservation.dto';
import { UpdateReservationDto } from './dto/update-reservation.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Reservation } from './entities/reservation.entity';
import { Repository } from 'typeorm';
import { Workspace } from '../workspaces/entities/workspace.entity';
import { User } from '../users/entities/user.entity';
import { Session } from '../sessions/entities/session.entity';

@Injectable()
export class ReservationsService {

  constructor(    

    @InjectRepository(Reservation)
    private reservationRepository: Repository<Reservation>,

    @InjectRepository(Workspace)
    private readonly workspacesRepository: Repository<Workspace>,

    @InjectRepository(User)
    private readonly userRepository: Repository<User>,

    @InjectRepository(Session)
    private readonly sessionRepository: Repository<Session>,
    
  ) {}
  create(createReservationDto: CreateReservationDto) {
    return 'This action adds a new reservation';
  }

  async findAll() {

    try {
      return await this.reservationRepository.find( { relations:{ session: true, user:true }} );
    } catch (error) {
      throw new InternalServerErrorException('Error trying to find all reservations', error.message)
    }
  }

  async findWorkspacesByUserId(userId: number): Promise<Workspace[]> {
    
    const user= await this.userRepository.findOne({ where: {id:userId} });

    if (!user){
      throw new NotFoundException('User given does not exist');
    }

    try {
      
      return this.workspacesRepository.createQueryBuilder('workspace')
        .innerJoin('workspace.reservation', 'reservation', 'reservation.user_id = :userId', { userId })
        .select(['workspace.id', 'workspace.row_num', 'workspace.column_num'])
        .getMany();

    } catch (error) {
      
      throw new BadRequestException('Error trying to find workspaces by user id', error.message)

    }
    
  }

  async findWorkspacesBySessionId(sessionId: number): Promise<Workspace[]> {

    const session= await this.sessionRepository.findOne({ where: {id:sessionId} });

    if (!session){
      throw new NotFoundException('Session given does not exist');
    }

    try {
      return this.workspacesRepository.createQueryBuilder('workspace')
        .innerJoinAndSelect('workspace.reservation', 'reservation', 'reservation.session_id = :sessionId', { sessionId })
        .innerJoinAndSelect('reservation.user', 'user')
        .select(['workspace.id', 'workspace.row_num', 'workspace.column_num', 'reservation.id', 'reservation.user_id', 'user.name'
         ])
        .getMany();
      
    } catch (error) {
      throw new BadRequestException('Error trying to find workspaces by user session', error.message)
    }
  }



}
