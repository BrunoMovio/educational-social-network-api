"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addLikeArray1669213280790 = void 0;
class addLikeArray1669213280790 {
    constructor() {
        this.name = 'addLikeArray1669213280790';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "post" ADD "users_liked" text NOT NULL`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "post" DROP COLUMN "users_liked"`);
    }
}
exports.addLikeArray1669213280790 = addLikeArray1669213280790;
//# sourceMappingURL=1669213280790-addLikeArray.js.map