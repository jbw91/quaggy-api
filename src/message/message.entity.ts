import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Message {
  @PrimaryGeneratedColumn() id: number;
  @Column() text: string;
  @Column() userId: number;
  @Column() channelId: number;
}
