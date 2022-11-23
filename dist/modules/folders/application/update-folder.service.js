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
exports.UpdateFolderService = void 0;
const common_1 = require("@nestjs/common");
const id_1 = require("./../../../modules/common/domain/value-objects/id");
const user_service_1 = require("./../../../modules/users/application/user.service");
const folder_orm_repository_1 = require("../infra/folder.orm.repository");
const folder_output_1 = require("./dto/folder.output");
let UpdateFolderService = class UpdateFolderService {
    constructor(folderRepository, userService) {
        this.folderRepository = folderRepository;
        this.userService = userService;
    }
    async update(input) {
        const folder = await this.folderRepository.findOne({
            id: new id_1.ID(input.id),
        });
        folder.updateFolder({
            title: input.title,
            description: input.description,
        });
        const savedFolder = await this.folderRepository.save(folder);
        const user = await this.userService.findById(folder.userId.value);
        return new folder_output_1.FolderDTO({ folder: savedFolder, user });
    }
};
UpdateFolderService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [folder_orm_repository_1.FolderOrmRepository,
        user_service_1.UserService])
], UpdateFolderService);
exports.UpdateFolderService = UpdateFolderService;
//# sourceMappingURL=update-folder.service.js.map