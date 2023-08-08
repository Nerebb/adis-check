// import {
//   Entity,
//   PrimaryGeneratedColumn,
//   Column,
//   Unique,
//   CreateDateColumn,
//   UpdateDateColumn,
//   OneToMany,
//   BaseEntity,
// } from "typeorm";
// import { Post } from "./Post";

// /// admin tạo thể loại
// // chỉ có admin quyền tạo
// @Entity()
// export class Category extends BaseEntity {
//   @PrimaryGeneratedColumn()
//   id: number;

//   @Column({ type: "text", unique: true })
//   name_categories: string;

//   @Column({ type: "json", nullable: true })
//   meta_data: JSON;

//   @OneToMany(() => Post, (post) => post.category)
//   posts: Post[];

//   @Column()
//   @CreateDateColumn()
//   createdAt: Date;

//   @Column()
//   @UpdateDateColumn()
//   updatedAt: Date;
// }
