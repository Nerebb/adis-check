import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  Unique,
  CreateDateColumn,
  UpdateDateColumn,
  BaseEntity,
  OneToMany,
} from 'typeorm';
import { Length, IsNotEmpty } from 'class-validator';
import * as bcrypt from 'bcryptjs';
import { Ads } from './Ads';

export enum Gender {
  Male = 'Male',
  Female = 'Female',
  NonBinary = 'NonBinary',
}

export enum ERole {
  Advertiser = 'Advertiser',
  Affiliate = 'Affiliate',
  SearchEngine = 'SearchEngine',
}

@Entity()
@Unique(['username'])
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @Length(4, 20)
  username: string;

  @Column()
  email: string;

  @Column()
  @Length(6, 100)
  password: string;

  @Column({ nullable: true })
  @Length(4, 100)
  firstName?: string;

  @Column({ nullable: true })
  @Length(4, 100)
  lastName: string;

  @Column({ nullable: true })
  @Length(9, 20)
  phone: string;

  @Column({ nullable: true })
  @Length(2, 2)
  country: string;

  @Column({
    type: 'enum',
    enum: Gender,
    nullable: true,
    default: Gender.Male,
  })
  gender: Gender;

  @Column('text', { nullable: true })
  bio: string;

  @Column({ nullable: true })
  avatar: string;

  @Column({ nullable: true })
  cover: string;

  @Column({
    type: 'enum',
    enum: ERole,
    nullable: true,
    default: ERole.Advertiser,
  })
  @IsNotEmpty()
  role: ERole;

  @Column()
  @CreateDateColumn()
  createdAt: Date;

  @Column()
  @UpdateDateColumn()
  updatedAt: Date;

  @OneToMany(() => Ads, (ads) => ads.user)
  ads: Ads[];

  hashPassword() {
    this.password = bcrypt.hashSync(this.password, 8);
  }

  checkIfUnencryptedPasswordIsValid(unencryptedPassword: string) {
    return bcrypt.compareSync(unencryptedPassword, this.password);
  }
}
