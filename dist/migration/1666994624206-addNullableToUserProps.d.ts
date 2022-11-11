import { MigrationInterface, QueryRunner } from "typeorm";
export declare class addNullableToUserProps1666994624206 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
