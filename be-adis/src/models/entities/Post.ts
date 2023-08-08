// import {
//   Entity,
//   PrimaryGeneratedColumn,
//   Column,
//   CreateDateColumn,
//   UpdateDateColumn,
//   ManyToOne,
//   BaseEntity,
// } from "typeorm";
// import { Category } from "./Categories";

// interface ILocation {
//   location: string;
//   country: string;
//   city: string;
// }

// enum EType {
//   sport = "sport",
//   Manual = "Manual",
//   Sports = "Sports",
// }

// @Entity()
// export class Post extends BaseEntity {
//   @PrimaryGeneratedColumn()
//   id: number;

//   @Column({ type: "text" })
//   ad_title: string;

//   @ManyToOne(() => Category, (category) => category.posts)
//   category: Category;

//   @Column()
//   categoryId: number;

//   @Column({ type: "json" })
//   location: ILocation; //   location =  {state,country,city}

//   @Column()
//   make: string;

//   @Column({ type: "int", nullable: true })
//   model: number;

//   @Column({ type: "enum", nullable: true })
//   type: number;

//   @Column({ type: "decimal", nullable: true })
//   price: number;

//   @Column()
//   condition: "New" | "Old";

//   @Column()
//   images: string;

//   @Column({ type: "boolean", default: true })
//   isActive: boolean;

//   @Column({ type: "text" })
//   description: string;

//   @CreateDateColumn()
//   createdAt: Date;

//   @Column()
//   @UpdateDateColumn()
//   updatedAt: Date;
// }
