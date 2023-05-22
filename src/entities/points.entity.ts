import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { GeoJSONColumn } from "../@types/geojson";

@Entity("points")
export class Point {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  name: string;

  @Column("jsonb")
  location: GeoJSONColumn;
}
