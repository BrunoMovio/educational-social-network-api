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
exports.CreateFolderService = void 0;
const common_1 = require("@nestjs/common");
const folder_factory_1 = require("../../domain/folder/folder.factory");
const folder_orm_repository_1 = require("../../infra/database/folder/folder.orm.repository");
const folder_output_1 = require("./dto/folder.output");
let CreateFolderService = class CreateFolderService {
    constructor(folderRepository) {
        this.folderRepository = folderRepository;
    }
    async create(input) {
        const folderFactory = new folder_factory_1.FolderFactory(this.folderRepository);
        const folder = await folderFactory.create(Object.assign({}, input));
        return new folder_output_1.FolderDTO(folder);
    }
};
CreateFolderService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [folder_orm_repository_1.FolderOrmRepository])
], CreateFolderService);
exports.CreateFolderService = CreateFolderService;
//# sourceMappingURL=create-folder.service.js.map