import { MigrationInterface, QueryRunner } from "typeorm";

export class migrateUsers1677028416275 implements MigrationInterface {
    name = 'migrateUsers1677028416275'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "date_of_birth" DROP NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "date_of_birth" SET NOT NULL`);
    }

}
