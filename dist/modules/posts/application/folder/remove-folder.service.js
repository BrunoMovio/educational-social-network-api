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
exports.RemoveFolderService = void 0;
const common_1 = require("@nestjs/common");
const id_1 = require("../../../../modules/common/domain/value-objects/id");
const folder_orm_repository_1 = require("../../infra/database/folder/folder.orm.repository");
let RemoveFolderService = class RemoveFolderService {
    constructor(folderReporsitory) {
        this.folderReporsitory = folderReporsitory;
    }
    async remove(id) {
        const folder = await this.folderReporsitory.findOneByIdOrThrow(new id_1.ID(id));
        await this.folderReporsitory.delete(folder);
        return "Folder deleted";
    }
};
RemoveFolderService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [folder_orm_repository_1.FolderOrmRepository])
], RemoveFolderService);
exports.RemoveFolderService = RemoveFolderService;
//# sourceMappingURL=remove-folder.service.js.map