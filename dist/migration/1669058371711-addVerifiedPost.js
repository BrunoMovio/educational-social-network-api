"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addVerifiedPost1669058371711 = void 0;
class addVerifiedPost1669058371711 {
    constructor() {
        this.name = "addVerifiedPost1669058371711";
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "post" ADD "verified" boolean NOT NULL`);
        await queryRunner.query(`ALTER TABLE "post" ADD "verified_by" character varying`);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22" UNIQUE ("email")`);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "UQ_e2364281027b926b879fa2fa1e0" UNIQUE ("nickname")`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "UQ_e2364281027b926b879fa2fa1e0"`);
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22"`);
        await queryRunner.query(`ALTER TABLE "post" DROP COLUMN "verified_by"`);
        await queryRunner.query(`ALTER TABLE "post" DROP COLUMN "verified"`);
    }
}
exports.addVerifiedPost1669058371711 = addVerifiedPost1669058371711;
//# sourceMappingURL=1669058371711-addVerifiedPost.js.map