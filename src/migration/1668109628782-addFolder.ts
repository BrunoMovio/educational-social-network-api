import {MigrationInterface, QueryRunner} from "typeorm";

export class addFolder1668109628782 implements MigrationInterface {
    name = 'addFolder1668109628782'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "folder" ("id" character varying NOT NULL, "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "user_id" character varying NOT NULL, "name" character varying NOT NULL, CONSTRAINT "uq_folder" UNIQUE ("user_id", "name"), CONSTRAINT "PK_6278a41a706740c94c02e288df8" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "post" ADD "folder_id" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "post" DROP COLUMN "folder_id"`);
        await queryRunner.query(`DROP TABLE "folder"`);
    }

}
