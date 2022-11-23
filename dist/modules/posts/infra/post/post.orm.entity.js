"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostOrm = void 0;
const typeorm_entity_base_1 = require("../../../common/database/typeorm.entity.base");
const typeorm_1 = require("typeorm");
let PostOrm = class PostOrm extends typeorm_entity_base_1.TypeormEntityBase {
};
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], PostOrm.prototype, "userId", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], PostOrm.prototype, "folderId", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], PostOrm.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], PostOrm.prototype, "subtitle", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], PostOrm.prototype, "image", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "text" }),
    __metadata("design:type", String)
], PostOrm.prototype, "text", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "jsonb" }),
    __metadata("design:type", Object)
], PostOrm.prototype, "tags", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "int" }),
    __metadata("design:type", Number)
], PostOrm.prototype, "likes", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "text" }),
    __metadata("design:type", Array)
], PostOrm.prototype, "usersLiked", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "boolean" }),
    __metadata("design:type", Boolean)
], PostOrm.prototype, "verified", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], PostOrm.prototype, "verifiedBy", void 0);
PostOrm = __decorate([
    (0, typeorm_1.Entity)("post"),
    (0, typeorm_1.Unique)("uq_post_folder", ["userId", , "folderId", "title"])
], PostOrm);
exports.PostOrm = PostOrm;
//# sourceMappingURL=post.orm.entity.js.map