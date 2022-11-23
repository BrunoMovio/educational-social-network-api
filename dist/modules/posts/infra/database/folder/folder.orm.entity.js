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
exports.FolderOrm = void 0;
const typeorm_entity_base_1 = require("../../../../common/database/typeorm.entity.base");
const typeorm_1 = require("typeorm");
let FolderOrm = class FolderOrm extends typeorm_entity_base_1.TypeormEntityBase {
};
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], FolderOrm.prototype, "userId", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], FolderOrm.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], FolderOrm.prototype, "description", void 0);
FolderOrm = __decorate([
    (0, typeorm_1.Entity)("folder"),
    (0, typeorm_1.Unique)("uq_folder", ["userId", "name"])
], FolderOrm);
exports.FolderOrm = FolderOrm;
//# sourceMappingURL=folder.orm.entity.js.map