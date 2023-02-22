import { MigrationInterface, QueryRunner } from "typeorm";

export class migrateUsers1677028503553 implements MigrationInterface {
    name = 'migrateUsers1677028503553'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "date_of_birth"`);
        await queryRunner.query(`ALTER TABLE "user" ADD "date_of_birth" TIMESTAMP NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "date_of_birth"`);
        await queryRunner.query(`ALTER TABLE "user" ADD "date_of_birth" character varying`);
    }

}
