import { Injectable } from '@nestjs/common';
import { CreateReservationDto } from './dto/create-reservation.dto';
import { UpdateReservationDto } from './dto/update-reservation.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Reservation } from './entities/reservation.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ReservationsService {

  constructor(    

    @InjectRepository(Reservation)
    private reservationRepository: Repository<Reservation>,
    
  ) {}
  create(createReservationDto: CreateReservationDto) {
    return 'This action adds a new reservation';
  }

  async findAll() {
    return await this.reservationRepository.find( { relations:{ session: true, user:true }} );
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
