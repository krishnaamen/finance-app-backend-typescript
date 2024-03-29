import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Entry {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  amount: number;
  // adding category
  @Column()
  category: string;

  @Column()
  date: Date;

  @Column()
  currency: string;

  @Column()
  name: string;

  @Column()
  comment: string;
}
