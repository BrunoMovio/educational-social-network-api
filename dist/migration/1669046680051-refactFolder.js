"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.refactFolder1669046680051 = void 0;
class refactFolder1669046680051 {
    constructor() {
        this.name = 'refactFolder1669046680051';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "folder" DROP CONSTRAINT "uq_folder"`);
        await queryRunner.query(`ALTER TABLE "folder" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "folder" ADD "title" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "folder" ADD "description" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "folder" ADD CONSTRAINT "uq_folder_title" UNIQUE ("user_id", "title")`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "folder" DROP CONSTRAINT "uq_folder_title"`);
        await queryRunner.query(`ALTER TABLE "folder" DROP COLUMN "description"`);
        await queryRunner.query(`ALTER TABLE "folder" DROP COLUMN "title"`);
        await queryRunner.query(`ALTER TABLE "folder" ADD "name" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "folder" ADD CONSTRAINT "uq_folder" UNIQUE ("user_id", "name")`);
    }
}
exports.refactFolder1669046680051 = refactFolder1669046680051;
//# sourceMappingURL=1669046680051-refactFolder.js.map