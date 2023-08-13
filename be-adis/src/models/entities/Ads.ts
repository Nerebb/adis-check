import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  BaseEntity,
  Index,
} from 'typeorm';
import { Category } from './Category';
import { User } from './User';
// import { User } from './User';

export enum EType {
  sport = 'sport',
  Manual = 'Manual',
  Sports = 'Sports',
}

export enum EStatus {
  pending = 'pending',
  active = 'active',
  shutOff = 'shutOff',
  decline = 'decline',
}

export enum ECondition {
  new = 'new',
  old = 'old',
}

@Entity()
export class Ads extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Index({ fulltext: true })
  @Column({ type: 'varchar' })
  ad_title: string;

  @ManyToOne(() => Category, (category) => category.ads)
  category: Category;

  @Column()
  category_name: string;

  @Column()
  categoryId: number;

  @ManyToOne(() => User, (user) => user.ads)
  user: User;

  @Column()
  userId: number;

  @Column()
  state: string;

  @Column()
  country: string;

  @Column()
  city: string;

  @Column()
  make: string;

  @Column({ type: 'int', nullable: true })
  model: number;

  @Column({ type: 'enum', enum: EType, nullable: true })
  type: EType;

  @Column({ type: 'decimal' })
  price: number;

  @Column({ type: 'enum', enum: ECondition, nullable: true })
  condition: ECondition;

  @Column({ type: 'simple-array' })
  images: string[];

  @Column({ type: 'enum', enum: EStatus, default: EStatus.active })
  status: EStatus;

  @Column({ type: 'int', default: 0 })
  view: number;

  @Column({ type: 'text' })
  description: string;

  @Column({ type: 'boolean', default: false })
  isValid: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @Column()
  @UpdateDateColumn()
  updatedAt: Date;
}
