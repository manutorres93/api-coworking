import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreateSessionDto } from './dto/create-session.dto';
import { UpdateSessionDto } from './dto/update-session.dto';
import { Session } from './entities/session.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class SessionsService {

  constructor(    

    @InjectRepository(Session)
    private sessionRepository: Repository<Session>,
    
  ) {}
  create(createSessionDto: CreateSessionDto) {
    return 'This action adds a new session';
  }

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


  findOne(id: number) {
    return `This action returns a #${id} session`;
  }

  update(id: number, updateSessionDto: UpdateSessionDto) {
    return `This action updates a #${id} session`;
  }

  remove(id: number) {
    return `This action removes a #${id} session`;
  }
}
