import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany } from 'typeorm';
import { Message } from 'message/message.entity';
import { Team } from 'team/team.entity';

@Entity()
export class Channel {
  @PrimaryGeneratedColumn() id: number;
  @Column() name: string;
  @Column() public: boolean;

  @OneToMany(type => Message, message => message.channel)
  messages: Message[];

  @ManyToOne(type => Team)
  team: Team;
}
