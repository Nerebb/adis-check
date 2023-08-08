import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  Unique,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
  BaseEntity,
} from "typeorm";
import { Ads } from "./Ads";

/// admin tạo thể loại
// chỉ có admin quyền tạo
@Entity()
export class Category extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar", unique: true })
  name_categories: string;

  @Column({ type: "json", nullable: true })
  meta_data: JSON;

  @OneToMany(() => Ads, (ads) => ads.category)
  ads: Ads[];

  @Column({ type: "varchar" })
  icon: string;

  @Column()
  @CreateDateColumn()
  createdAt: Date;

  @Column()
  @UpdateDateColumn()
  updatedAt: Date;
}
