"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addNullableToUserProps1666994624206 = void 0;
class addNullableToUserProps1666994624206 {
    constructor() {
        this.name = 'addNullableToUserProps1666994624206';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "description" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "city" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "state" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "country" DROP NOT NULL`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "country" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "state" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "city" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "description" SET NOT NULL`);
    }
}
exports.addNullableToUserProps1666994624206 = addNullableToUserProps1666994624206;
//# sourceMappingURL=1666994624206-addNullableToUserProps.js.map