import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { GeoJSONColumn } from "../@types/geojson";

@Entity("polygons")
export class Polygon {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  name: string;

  @Column("jsonb")
  location: GeoJSONColumn;
}
