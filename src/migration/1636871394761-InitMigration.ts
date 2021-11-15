import {MigrationInterface, QueryRunner} from "typeorm";

export class InitMigration1636871394761 implements MigrationInterface {
    name = 'InitMigration1636871394761'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE IF NOT EXISTS "user" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "city" character varying NOT NULL, CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "user"`);
    }

}
