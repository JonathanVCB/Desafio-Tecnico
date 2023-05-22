import { MigrationInterface, QueryRunner } from "typeorm";

export class addpolygons1684771343276 implements MigrationInterface {
    name = 'addpolygons1684771343276'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "polygons" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "location" jsonb NOT NULL, CONSTRAINT "PK_820373c50c2a9a63bb7edc0959b" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "polygons"`);
    }

}
