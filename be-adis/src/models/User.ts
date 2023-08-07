import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  Unique,
  CreateDateColumn,
  UpdateDateColumn
} from "typeorm";
import { Length, IsNotEmpty } from "class-validator";
import * as bcrypt from "bcryptjs";

export enum Gender {
  Male = 'Male',
  Female = 'Female',
  NonBinary = 'NonBinary',
}

export enum Role {
  Advertiser = 'Advertiser',
  Affiliate = 'Affiliate',
  SearchEngine = 'SearchEngine',
}

@Entity()
@Unique(["username"])
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @Length(4, 20)
  username: string;

  @Column()
  @Length(6, 100)
  password: string;

  @Column()
  @Length(4, 100)
  firstName: string;

  @Column()
  @Length(4, 100)
  lastName: string;

  @Column()
  @Length(9, 20)
  phone: string;

  @Column()
  @Length(2, 2)
  country: string;

  @Column({
    type: 'enum',
    enum: Gender,
    nullable: true,
  })
  gender: Gender;

  @Column('text')
  bio: string;

  @Column()
  avatar: string;

  @Column()
  cover: string;

  @Column({
    type: 'enum',
    enum: Role,
    nullable: true,
  })
  @IsNotEmpty()
  role: Role;

  @Column()
  @CreateDateColumn()
  createdAt: Date;

  @Column()
  @UpdateDateColumn()
  updatedAt: Date;

  hashPassword() {
    this.password = bcrypt.hashSync(this.password, 8);
  }

  checkIfUnencryptedPasswordIsValid(unencryptedPassword: string) {
    return bcrypt.compareSync(unencryptedPassword, this.password);
  }
}
