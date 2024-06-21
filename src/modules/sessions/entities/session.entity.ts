import {  IsNumber, IsString } from 'class-validator';
import { Reservation } from '@modules/reservations/entities/reservation.entity';
import { Room } from '@modules/rooms/entities/room.entity';
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity({name: 'sessions'})
export class Session {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    @IsNumber()
    room_id: number;
  
    @Column()
    @IsString()
    description: string;

    @Column()
    date: Date;
  
    @Column({ type: 'time' })
    start_time: string

    @Column({ type: 'time' })
    end_time: string
    


    @ManyToOne(() => Room, (room) => room.session) //room.workspace
    @JoinColumn({ name: 'room_id' })
    room: Room;

    @OneToMany(()=> Reservation, (reservation)=> reservation.session)
    reservation: Reservation[]


}
