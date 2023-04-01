import { Entity, PrimaryGeneratedColumn, Column, JoinColumn, Relation, OneToMany } from 'typeorm';
import { Link } from './Link';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column()
  name: string;

  @Column()
  password: string;

  @Column({ default: false })
  isPro: boolean;

  @Column({ default: false })
  isAdmin: boolean;

  @OneToMany(() => Link, (link) => link.linkID)
  @JoinColumn()
  link: Relation<Link>;
}
