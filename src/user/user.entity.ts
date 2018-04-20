import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinTable, OneToMany, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { Team } from 'team/team.entity';
import { Message } from 'message/message.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid') id: number;

  @Column({ unique: true })
  username: string;

  @Column({ unique: true })
  email: string;

  @Column() password: string;

  @CreateDateColumn() created: Date;

  @UpdateDateColumn() updated: Date;

  @ManyToMany(type => Team, team => team.users)
  @JoinTable({ name: 'members' })
  teams: Team[];

  @OneToMany(type => Message, message => message.user)
  messages: Message[];

  @OneToMany(type => Team, team => team.owner)
  ownedTeams: Team[];
}
