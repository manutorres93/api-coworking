import {  IsNumber, IsString } from 'class-validator';
import { Session } from 'src/modules/sessions/entities/session.entity';
import { User } from 'src/modules/users/entities/user.entity';
import { Workspace } from 'src/modules/workspaces/entities/workspace.entity';
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity({name: 'reservations'})
export class Reservation {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    @IsNumber()
    user_id: number;

    @Column()
    @IsNumber()
    workspace_id: number;

    @Column()
    @IsNumber()
    session_id: number;

    @ManyToOne(() => User, (user) => user.reservation) //room.workspace
    @JoinColumn({ name: 'user_id' })
    user: User;

    @ManyToOne(() => Workspace, (workspace) => workspace.reservation) //room.workspace
    @JoinColumn({ name: 'workspace_id' })
    workspace: Workspace;

    @ManyToOne(() => Session, (session) => session.reservation) //room.workspace
    @JoinColumn({ name: 'session_id' })
    session: Session;

}
