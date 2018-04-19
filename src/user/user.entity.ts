import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinTable, OneToMany } from 'typeorm';
import { Team } from 'team/team.entity';
import { Message } from 'message/message.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn() id: number;
  @Column({ unique: true }) username: string;
  @Column({ unique: true }) email: string;
  @Column() password: string;

  @ManyToMany(type => Team, team => team.users)
  @JoinTable({ name: 'members' })
  teams: Team[];

  @OneToMany(type => Message, message => message.user)
  messages: Message[];

  @OneToMany(type => Team, team => team.owner)
  ownedTeams: Team[];
}
