import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { State } from './State'; // Import State entity
import { Country } from './Country'; // Import Country entity

@Entity('cities')
export class City {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255, collation: 'utf8mb4_unicode_ci' })
  name: string;

  @ManyToOne(() => State)
  @JoinColumn({ name: 'state_id' })
  state: State;

  @Column({
    name: 'state_code',
    type: 'varchar',
    length: 255,
    collation: 'utf8mb4_unicode_ci',
  })
  stateCode: string;

  @ManyToOne(() => Country)
  @JoinColumn({ name: 'country_id' })
  country: Country;

  @Column({
    name: 'country_code',
    type: 'char',
    length: 2,
    collation: 'utf8mb4_unicode_ci',
  })
  countryCode: string;

  @Column({ type: 'decimal', precision: 10, scale: 8 })
  latitude: number;

  @Column({ type: 'decimal', precision: 11, scale: 8 })
  longitude: number;

  @Column({ name: 'created_at', type: 'timestamp', nullable: true })
  createdAt: Date | null;
  // { name: 'created_at', type: 'timestamp', nullable: true }

  @Column({
    name: 'updated_at',
    type: 'timestamp',
    nullable: true,
  })
  updatedAt: Date | null;

  @Column({ type: 'tinyint', default: 1 })
  flag: number;

  @Column({
    name: 'wikiDataId',
    type: 'varchar',
    length: 255,
    collation: 'utf8mb4_unicode_ci',
    nullable: true,
  })
  wikiDataId: string | null;
}
