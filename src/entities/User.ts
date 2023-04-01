import { Entity, PrimaryGeneratedColumn, Column, JoinColumn, Relation, OneToMany } from 'typeorm';
import { Link } from './Link';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  userId: string;

  @Column()
  username: string;

  @Column()
  password: string;

  @Column()
  passwordHash: string;

  @Column({ default: false })
  isPro: boolean;

  @Column({ default: false })
  isAdmin: boolean;

  @OneToMany(() => Link, (link) => link.linkId)
  @JoinColumn()
  link: Relation<Link>;
}
