import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("places")
export class Place {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  name: string;

  @Column()
  latitude: string;

  @Column()
  longitude: string;
}
