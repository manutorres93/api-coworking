import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { Session } from './entities/session.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class SessionsService {

  constructor(    

    @InjectRepository(Session)
    private sessionRepository: Repository<Session>,
    
  ) {}


  async findAll() {
    try {
      return await this.sessionRepository.find({ relations: ['room'] });
      
    } catch (error) {
      throw new InternalServerErrorException('Error trying to find sessions',error.message);
    }
  }

  async findSessionsOrderedByMostOccupied(): Promise<Session[]> {

    try {
      return await this.sessionRepository
        .createQueryBuilder('session')
        .leftJoin('session.reservation', 'reservation')
        .select('session.id', 'id')
        .addSelect('session.description', 'description')
        .addSelect('COUNT(reservation.id)', 'num_reservations')
        .groupBy('session.id')
        .addGroupBy('session.description')
        .orderBy('num_reservations', 'DESC')
        .getRawMany();
      
    } catch (error) {

      throw new InternalServerErrorException('Error trying to find sessions',error.message);
      
    }
  }

  async findSessionsOrderedByMostAvailable(): Promise<Session[]> {
    try {
      return await this.sessionRepository
        .createQueryBuilder('session')
        .leftJoin('session.reservation', 'reservation')
        .select('session.id', 'id')
        .addSelect('session.description', 'description')
        .addSelect('COUNT(reservation.id)', 'num_reservations')
        .groupBy('session.id')
        .addGroupBy('session.description')
        .orderBy('num_reservations', 'ASC')
        .getRawMany();
      
    } catch (error) {

      throw new InternalServerErrorException('Error trying to find sessions',error.message);
      
    }
  }



}
