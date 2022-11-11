"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addFolder1668109628782 = void 0;
class addFolder1668109628782 {
    constructor() {
        this.name = 'addFolder1668109628782';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "folder" ("id" character varying NOT NULL, "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "user_id" character varying NOT NULL, "name" character varying NOT NULL, CONSTRAINT "uq_folder" UNIQUE ("user_id", "name"), CONSTRAINT "PK_6278a41a706740c94c02e288df8" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "post" ADD "folder_id" character varying NOT NULL`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "post" DROP COLUMN "folder_id"`);
        await queryRunner.query(`DROP TABLE "folder"`);
    }
}
exports.addFolder1668109628782 = addFolder1668109628782;
//# sourceMappingURL=1668109628782-addFolder.js.map