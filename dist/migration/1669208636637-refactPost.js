"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.refactPost1669208636637 = void 0;
class refactPost1669208636637 {
    constructor() {
        this.name = 'refactPost1669208636637';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "post" DROP CONSTRAINT "uq_post"`);
        await queryRunner.query(`ALTER TABLE "post" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "post" DROP COLUMN "markdown"`);
        await queryRunner.query(`ALTER TABLE "post" ADD "title" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "post" ADD "subtitle" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "post" ADD "image" character varying`);
        await queryRunner.query(`ALTER TABLE "post" ADD "text" text NOT NULL`);
        await queryRunner.query(`ALTER TABLE "post" ADD CONSTRAINT "uq_post_folder" UNIQUE ("user_id", "folder_id", "title")`);
    }
    async down(queryRunner) {
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
exports.refactPost1669208636637 = refactPost1669208636637;
//# sourceMappingURL=1669208636637-refactPost.js.map