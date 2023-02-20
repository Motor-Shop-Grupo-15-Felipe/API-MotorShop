import { MigrationInterface, QueryRunner } from "typeorm";

export class initialMigrate1676931742907 implements MigrationInterface {
    name = 'initialMigrate1676931742907'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "announcement" ("id" uuid NOT NULL, "announcementType" character varying(20) NOT NULL, "plate" character varying(7) NOT NULL, "title" character varying(150) NOT NULL, "year" integer NOT NULL, "km" integer NOT NULL, "price" integer NOT NULL, "description" character varying(150) NOT NULL, "vehicleType" character varying(250) NOT NULL, "published" boolean NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "isActive" boolean NOT NULL DEFAULT true, CONSTRAINT "UQ_39d1a203c343a289c5a736adf96" UNIQUE ("plate"), CONSTRAINT "PK_e0ef0550174fd1099a308fd18a0" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "announcement"`);
    }

}
