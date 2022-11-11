"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addUserCareer1666806266521 = void 0;
class addUserCareer1666806266521 {
    constructor() {
        this.name = 'addUserCareer1666806266521';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "user" ADD "career" character varying`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "career"`);
    }
}
exports.addUserCareer1666806266521 = addUserCareer1666806266521;
//# sourceMappingURL=1666806266521-addUserCareer.js.map