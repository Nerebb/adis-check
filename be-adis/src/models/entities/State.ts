import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Country } from './Country'; // Import Country entity

@Entity('states')
export class State {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255, collation: 'utf8mb4_unicode_ci' })
  name: string;

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

  @Column({
    name: 'fips_code',
    type: 'varchar',
    length: 255,
    collation: 'utf8mb4_unicode_ci',
    nullable: true,
  })
  fipsCode: string | null;

  @Column({
    type: 'varchar',
    length: 255,
    collation: 'utf8mb4_unicode_ci',
    nullable: true,
  })
  iso2: string | null;

  @Column({
    type: 'varchar',
    length: 191,
    collation: 'utf8mb4_unicode_ci',
    nullable: true,
  })
  type: string | null;

  @Column({ type: 'decimal', precision: 10, scale: 8, nullable: true })
  latitude: number | null;

  @Column({ type: 'decimal', precision: 11, scale: 8, nullable: true })
  longitude: number | null;

  @Column({ name: 'created_at', type: 'timestamp', nullable: true })
  createdAt: Date | null;

  @Column({
    name: 'updated_at',
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
    onUpdate: 'CURRENT_TIMESTAMP',
  })
  updatedAt: Date;

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
