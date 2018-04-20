import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { Message } from 'message/message.entity';
import { Team } from 'team/team.entity';

@Entity()
export class Channel {
  @PrimaryGeneratedColumn() id: number;
  @Column() name: string;
  @Column() public: boolean;
  @CreateDateColumn() created: Date;
  @UpdateDateColumn() updated: Date;

  @OneToMany(type => Message, message => message.channel)
  messages: Message[];

  @ManyToOne(type => Team)
  team: Team;
}
