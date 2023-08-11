import { Entity, PrimaryGeneratedColumn, Column, Index } from 'typeorm';

@Entity('countries')
@Index('idx_country_name', ['name'])
export class Country {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 100, collation: 'utf8mb4_unicode_ci' })
  name: string;

  @Column({
    type: 'char',
    length: 3,
    collation: 'utf8mb4_unicode_ci',
    nullable: true,
  })
  iso3: string | null;

  @Column({
    name: 'numeric_code',
    type: 'char',
    length: 3,
    collation: 'utf8mb4_unicode_ci',
    nullable: true,
  })
  numericCode: string | null;

  @Column({
    type: 'char',
    length: 2,
    collation: 'utf8mb4_unicode_ci',
    nullable: true,
  })
  iso2: string | null;

  @Column({
    type: 'varchar',
    length: 255,
    collation: 'utf8mb4_unicode_ci',
    nullable: true,
  })
  phonecode: string | null;

  @Column({
    type: 'varchar',
    length: 255,
    collation: 'utf8mb4_unicode_ci',
    nullable: true,
  })
  capital: string | null;

  @Column({
    type: 'varchar',
    length: 255,
    collation: 'utf8mb4_unicode_ci',
    nullable: true,
  })
  currency: string | null;

  @Column({
    name: 'currency_name',
    type: 'varchar',
    length: 255,
    collation: 'utf8mb4_unicode_ci',
    nullable: true,
  })
  currencyName: string | null;

  @Column({
    name: 'currency_symbol',
    type: 'varchar',
    length: 255,
    collation: 'utf8mb4_unicode_ci',
    nullable: true,
  })
  currencySymbol: string | null;

  @Column({
    type: 'varchar',
    length: 255,
    collation: 'utf8mb4_unicode_ci',
    nullable: true,
  })
  tld: string | null;

  @Column({
    type: 'varchar',
    length: 255,
    collation: 'utf8mb4_unicode_ci',
    nullable: true,
  })
  native: string | null;

  @Column({
    type: 'varchar',
    length: 255,
    collation: 'utf8mb4_unicode_ci',
    nullable: true,
  })
  region: string | null;

  @Column({
    type: 'varchar',
    length: 255,
    collation: 'utf8mb4_unicode_ci',
    nullable: true,
  })
  subregion: string | null;

  @Column({ type: 'text', collation: 'utf8mb4_unicode_ci', nullable: true })
  timezones: string | null;

  @Column({ type: 'text', collation: 'utf8mb4_unicode_ci', nullable: true })
  translations: string | null;

  @Column({ type: 'decimal', nullable: true })
  latitude: number | null;

  @Column({ type: 'decimal', nullable: true })
  longitude: number | null;

  @Column({
    type: 'varchar',
    length: 191,
    collation: 'utf8mb4_unicode_ci',
    nullable: true,
  })
  emoji: string | null;

  @Column({
    name: 'emojiU',
    type: 'varchar',
    length: 191,
    collation: 'utf8mb4_unicode_ci',
    nullable: true,
  })
  emojiU: string | null;

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
