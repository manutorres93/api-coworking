import {  IsNumber, IsString } from 'class-validator';
import { Room } from '@modules/rooms/entities/room.entity';
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Reservation } from '@modules/reservations/entities/reservation.entity';


@Entity({name: 'workspaces'})
export class Workspace {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    @IsString()
    row_num: string;
  
    @Column()
    @IsString()
    column_num: string;

    @Column()
    @IsNumber()
    room_id: number;

    @ManyToOne(() => Room, (room) => room.workspaces) //room.workspace
    @JoinColumn({ name: 'room_id' })
    room: Room;

    @OneToMany(()=> Reservation, (reservation)=> reservation.workspace)
    reservation: Reservation[]

/*     @OneToMany(()=> Session, (session)=> session.workspace)
    session: Session[] */
}
