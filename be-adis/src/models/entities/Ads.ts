import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  BaseEntity,
} from 'typeorm';
import { Category } from './Category';
import { User } from './User';

interface ILocation {
  location: string;
  country: string;
  city: string;
}

enum EType {
  sport = 'sport',
  Manual = 'Manual',
  Sports = 'Sports',
}

@Entity()
export class Ads extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'text' })
  ad_title: string;

  @ManyToOne(() => Category, (category) => category.ads)
  category: Category;

  @Column()
  categoryId: number;

  @ManyToOne(() => User, (user) => user.ads)
  user: User;

  @Column()
  userId: number;

  @Column({ type: 'json' })
  location: ILocation; //   location =  {state,country,city}

  @Column()
  make: string;

  @Column({ type: 'int', nullable: true })
  model: number;

  @Column({ type: 'enum', enum: EType, nullable: true })
  type: EType;

  @Column({ type: 'decimal' })
  price: number;

  @Column()
  condition: 'New' | 'Old';

  @Column()
  images: string;

  @Column({ type: 'boolean', default: true })
  isActive: boolean;

  @Column({ type: 'text' })
  description: string;

  @CreateDateColumn()
  createdAt: Date;

  @Column()
  @UpdateDateColumn()
  updatedAt: Date;
}
