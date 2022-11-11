import {MigrationInterface, QueryRunner} from "typeorm";

export class addUserCareer1666806266521 implements MigrationInterface {
    name = 'addUserCareer1666806266521'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ADD "career" character varying`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "career"`);
    }

}
