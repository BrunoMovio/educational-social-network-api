"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeFKfromPostsToUsers1665018586209 = void 0;
class removeFKfromPostsToUsers1665018586209 {
    constructor() {
        this.name = 'removeFKfromPostsToUsers1665018586209';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "post" DROP CONSTRAINT "FK_52378a74ae3724bcab44036645b"`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "post" ADD CONSTRAINT "FK_52378a74ae3724bcab44036645b" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }
}
exports.removeFKfromPostsToUsers1665018586209 = removeFKfromPostsToUsers1665018586209;
//# sourceMappingURL=1665018586209-removeFKfromPostsToUsers.js.map