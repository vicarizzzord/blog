import {
    Entity,
    Column,
    CreateDateColumn,
    PrimaryGeneratedColumn,
    OneToOne,
    JoinColumn,
  } from "typeorm";
import { User } from "./User";
  
  @Entity("posts")
  export class Post {
    @PrimaryGeneratedColumn("uuid", {
      name: "id",
    })
    id: string;
  
    @Column()
    content: string;
    
    @OneToOne(() => User)
    @JoinColumn({name: "userId"})
    user: User;
  
    @CreateDateColumn()
    createdAt: Date;
  }