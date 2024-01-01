import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Note {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  name: string;
}
