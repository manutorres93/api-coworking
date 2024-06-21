import { Session } from '@modules/sessions/entities/session.entity';
import {  IsNumber, IsString } from 'class-validator';
import { Workspace } from '@modules/workspaces/entities/workspace.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity({name: 'rooms'})
export class Room {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    @IsString()
    room_name: string;

    @Column()
    @IsNumber()
    num_rows: number;

    @Column()
    @IsNumber()
    num_columns: number;

    @Column()
    @IsNumber()
    capacity: number

    @OneToMany(()=> Workspace, (workspace)=> workspace.room)
    workspaces: Workspace[]

    @OneToMany(()=> Session, (session)=> session.room)
    session: Session[]
}


