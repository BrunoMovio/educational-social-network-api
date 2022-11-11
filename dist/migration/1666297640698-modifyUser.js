"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.modifyUser1666297640698 = void 0;
class modifyUser1666297640698 {
    constructor() {
        this.name = 'modifyUser1666297640698';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "birthday"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "avatar"`);
        await queryRunner.query(`ALTER TABLE "user" ADD "email" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user" ADD "nickname" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user" ADD "role" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user" ADD "city" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user" ADD "state" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user" ADD "country" character varying NOT NULL`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "country"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "state"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "city"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "role"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "nickname"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "email"`);
        await queryRunner.query(`ALTER TABLE "user" ADD "avatar" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user" ADD "birthday" date NOT NULL`);
    }
}
exports.modifyUser1666297640698 = modifyUser1666297640698;
//# sourceMappingURL=1666297640698-modifyUser.js.map