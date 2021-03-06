import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, OneToOne, ManyToOne, OneToMany, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { User } from 'user/user.entity';
import { Channel } from 'channel/channel.entity';

@Entity()
export class Team {
  @PrimaryGeneratedColumn() id: number;
  @Column({ unique: true })
  name: string;
  @CreateDateColumn() created: Date;
  @UpdateDateColumn() updated: Date;

  @ManyToOne(type => User)
  owner: User;

  @ManyToMany(type => User, user => user.teams)
  users: User[];

  @OneToMany(type => Channel, channel => channel.team)
  channels: Channel[];
}
