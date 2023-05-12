import { User } from 'src/users/entities/user.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class UserComment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'longtext' })
  text: string;

  @Column()
  assetId: number;

  /** @param - The id of the comment's receiver, a.k.a. an userId */
  @Column()
  receiverId: number;

  @Column({ type: 'timestamp', default: () => 'now()' })
  createdAt: Date;

  @Column({ type: 'timestamp', default: () => 'now()' })
  lastUpdate: Date;

  /** @param - ManyToOne relation to User, and also comment's author id, or userId */
  @ManyToOne(() => User, (user) => user.comment)
  user: User;
}
