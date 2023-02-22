import { MigrationInterface, QueryRunner } from "typeorm";

export class migrateUsers1677028704468 implements MigrationInterface {
    name = 'migrateUsers1677028704468'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "date_of_birth"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ADD "date_of_birth" TIMESTAMP NOT NULL`);
    }

}
