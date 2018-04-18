import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Channel {
  @PrimaryGeneratedColumn() id: number;
  @Column() name: string;
  @Column() teamId: number;
  @Column() public: boolean;
}
