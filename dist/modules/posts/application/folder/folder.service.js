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
exports.FolderService = void 0;
const common_1 = require("@nestjs/common");
const id_1 = require("../../../../modules/common/domain/value-objects/id");
const folder_orm_repository_1 = require("../../infra/database/folder/folder.orm.repository");
const folder_output_1 = require("./dto/folder.output");
let FolderService = class FolderService {
    constructor(folderRepository) {
        this.folderRepository = folderRepository;
    }
    async findAll() {
        const folders = await this.folderRepository.findMany();
        return folders.map((folder) => new folder_output_1.FolderDTO(folder));
    }
    async findFolder(id) {
        try {
            const post = await this.folderRepository.findOne({ id: new id_1.ID(id) });
            return new folder_output_1.FolderDTO(post);
        }
        catch (e) {
            throw new common_1.NotFoundException("Folder not found with id: " + id);
        }
    }
    async findByUserId(userId) {
        const folders = await this.folderRepository.findManyByUserId(userId);
        return folders.map((folder) => new folder_output_1.FolderDTO(folder));
    }
    async findByName(name) {
        try {
            const folder = await this.folderRepository.findOneByName(name);
            return new folder_output_1.FolderDTO(folder);
        }
        catch (e) {
            throw new common_1.NotFoundException("Folder not found with name: " + name);
        }
    }
};
FolderService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [folder_orm_repository_1.FolderOrmRepository])
], FolderService);
exports.FolderService = FolderService;
//# sourceMappingURL=folder.service.js.map