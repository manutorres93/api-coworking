import { BadRequestException, Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { Workspace } from '../workspaces/entities/workspace.entity';

@Injectable()
export class UsersService {

  constructor(    

    @InjectRepository(User)
    private userRepository: Repository<User>,
    
  ) {}
  async create(createUserDto: CreateUserDto) {

    try {

      const user = this.userRepository.create(createUserDto);

      return await this.userRepository.save(user);
      
    } catch (error) {
      throw new BadRequestException('Error creating user', error.message)
    }
    
    
  }

  async findAll() {
    try {
      return await this.userRepository.find();
    } catch (error) {
      throw new InternalServerErrorException('Error trying to find all users', error.message);
    }
  }

  


}
