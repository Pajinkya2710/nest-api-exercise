import { Entity, Column, PrimaryGeneratedColumn, Index } from 'typeorm';

@Entity({ name: 'users' })
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Index()
  @Column()
  name: string;

  @Index()
  @Column({ default: null })
  full_name: string;

  @Index()
  @Column()
  email: string;

  @Column()
  password: string;

  @Column({ default: null })
  hashdRt: string | null;

  @Column({ default: true })
  isActive: boolean;
  comment: any;
}
// I'm trying to give timestamp ({ type: 'timestamp', default: () => 'now()' }) but there not working but don't worry I'll started the learning on it
