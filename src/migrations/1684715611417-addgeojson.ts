import { MigrationInterface, QueryRunner } from "typeorm";

export class addgeojson1684715611417 implements MigrationInterface {
    name = 'addgeojson1684715611417'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "points" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "location" jsonb NOT NULL, CONSTRAINT "PK_57a558e5e1e17668324b165dadf" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "points"`);
    }

}
