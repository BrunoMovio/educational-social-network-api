import {MigrationInterface, QueryRunner} from "typeorm";

export class refactFolder1669046680051 implements MigrationInterface {
    name = 'refactFolder1669046680051'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "folder" DROP CONSTRAINT "uq_folder"`);
        await queryRunner.query(`ALTER TABLE "folder" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "folder" ADD "title" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "folder" ADD "description" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "folder" ADD CONSTRAINT "uq_folder_title" UNIQUE ("user_id", "title")`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "folder" DROP CONSTRAINT "uq_folder_title"`);
        await queryRunner.query(`ALTER TABLE "folder" DROP COLUMN "description"`);
        await queryRunner.query(`ALTER TABLE "folder" DROP COLUMN "title"`);
        await queryRunner.query(`ALTER TABLE "folder" ADD "name" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "folder" ADD CONSTRAINT "uq_folder" UNIQUE ("user_id", "name")`);
    }

}
