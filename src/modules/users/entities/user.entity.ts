import { IsEmail } from 'class-validator';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Session } from 'src/modules/sessions/entities/session.entity';
import { Reservation } from 'src/modules/reservations/entities/reservation.entity';

@Entity({name: 'users'})
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    user_id: string;

    @Column()
    name: string;

    @Column()
    @IsEmail()
    email: string;

    @OneToMany(()=> Reservation, (reservation)=> reservation.user)
    reservation: Reservation[]


}
