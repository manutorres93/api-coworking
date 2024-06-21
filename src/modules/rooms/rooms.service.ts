import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { Room } from './entities/room.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class RoomsService {
  constructor(    

    @InjectRepository(Room)
    private roomRepository: Repository<Room>,
    
  ) {}


  async findAll() {
    try {
      return await this.roomRepository.find();
      
    } catch (error) {
      throw new InternalServerErrorException('Error trying to find rooms',error.message);
    }
  }

}
