import { Entity, PrimaryGeneratedColumn, Column, JoinColumn, Relation, ManyToOne } from 'typeorm';
import { User } from './User';

@Entity()
export class Link {
  @PrimaryGeneratedColumn('uuid')
  linkId: string;

  @Column()
  originalURL: string;

  @Column()
  lastAccessedOn: string;

  @Column({ default: false })
  isPro: boolean;

  @Column({ default: false })
  isAdmin: boolean;

  @Column({ default: 0 })
  numHits: number;

  @ManyToOne(() => User, (user) => user.userId)
  @JoinColumn()
  user: Relation<User>;
}
