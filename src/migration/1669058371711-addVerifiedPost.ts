import { MigrationInterface, QueryRunner } from "typeorm";

export class addVerifiedPost1669058371711 implements MigrationInterface {
  name = "addVerifiedPost1669058371711";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "post" ADD "verified" boolean NOT NULL`
    );
    await queryRunner.query(
      `ALTER TABLE "post" ADD "verified_by" character varying`
    );
    await queryRunner.query(
      `ALTER TABLE "user" ADD CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22" UNIQUE ("email")`
    );
    await queryRunner.query(
      `ALTER TABLE "user" ADD CONSTRAINT "UQ_e2364281027b926b879fa2fa1e0" UNIQUE ("nickname")`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "user" DROP CONSTRAINT "UQ_e2364281027b926b879fa2fa1e0"`
    );
    await queryRunner.query(
      `ALTER TABLE "user" DROP CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22"`
    );
    await queryRunner.query(`ALTER TABLE "post" DROP COLUMN "verified_by"`);
    await queryRunner.query(`ALTER TABLE "post" DROP COLUMN "verified"`);
  }
}
