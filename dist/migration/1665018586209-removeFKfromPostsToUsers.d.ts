import { MigrationInterface, QueryRunner } from "typeorm";
export declare class removeFKfromPostsToUsers1665018586209 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
