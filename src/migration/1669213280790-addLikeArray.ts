import {MigrationInterface, QueryRunner} from "typeorm";

export class addLikeArray1669213280790 implements MigrationInterface {
    name = 'addLikeArray1669213280790'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "post" ADD "users_liked" text NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "post" DROP COLUMN "users_liked"`);
    }

}
