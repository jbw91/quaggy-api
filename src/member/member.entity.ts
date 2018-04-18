import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Member {
  @PrimaryGeneratedColumn() id: number;
  @Column() teamId: number;
  @Column() userId: number;
}
