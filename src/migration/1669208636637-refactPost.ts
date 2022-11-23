import {MigrationInterface, QueryRunner} from "typeorm";

export class refactPost1669208636637 implements MigrationInterface {
    name = 'refactPost1669208636637'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "post" DROP CONSTRAINT "uq_post"`);
        await queryRunner.query(`ALTER TABLE "post" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "post" DROP COLUMN "markdown"`);
        await queryRunner.query(`ALTER TABLE "post" ADD "title" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "post" ADD "subtitle" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "post" ADD "image" character varying`);
        await queryRunner.query(`ALTER TABLE "post" ADD "text" text NOT NULL`);
        await queryRunner.query(`ALTER TABLE "post" ADD CONSTRAINT "uq_post_folder" UNIQUE ("user_id", "folder_id", "title")`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "post" DROP CONSTRAINT "uq_post_folder"`);
        await queryRunner.query(`ALTER TABLE "post" DROP COLUMN "text"`);
        await queryRunner.query(`ALTER TABLE "post" DROP COLUMN "image"`);
        await queryRunner.query(`ALTER TABLE "post" DROP COLUMN "subtitle"`);
        await queryRunner.query(`ALTER TABLE "post" DROP COLUMN "title"`);
        await queryRunner.query(`ALTER TABLE "post" ADD "markdown" text NOT NULL`);
        await queryRunner.query(`ALTER TABLE "post" ADD "name" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "post" ADD CONSTRAINT "uq_post" UNIQUE ("user_id", "name")`);
    }

}
