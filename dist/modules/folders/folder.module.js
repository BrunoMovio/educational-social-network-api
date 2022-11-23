"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FolderModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const folder_orm_entity_1 = require("./infra/folder.orm.entity");
const folder_controler_1 = require("./presentation/folder.controler");
const user_module_1 = require("../users/user.module");
const folder_orm_repository_1 = require("./infra/folder.orm.repository");
const create_folder_service_1 = require("./application/create-folder.service");
const folder_service_1 = require("./application/folder.service");
const remove_folder_service_1 = require("./application/remove-folder.service");
const update_folder_service_1 = require("./application/update-folder.service");
const folder_factory_1 = require("./domain/folder.factory");
const folder_orm_mapper_1 = require("./infra/folder.orm.mapper");
const folder_feed_service_1 = require("./application/folder-feed.service");
let FolderModule = class FolderModule {
};
FolderModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([folder_orm_entity_1.FolderOrm]),
            (0, common_1.forwardRef)(() => user_module_1.UserModule),
        ],
        providers: [
            folder_orm_repository_1.FolderOrmRepository,
            folder_factory_1.FolderFactory,
            folder_service_1.FolderService,
            folder_feed_service_1.FolderFeedService,
            create_folder_service_1.CreateFolderService,
            update_folder_service_1.UpdateFolderService,
            remove_folder_service_1.RemoveFolderService,
            folder_orm_mapper_1.FolderOrmMapper,
        ],
        controllers: [folder_controler_1.FolderController],
        exports: [folder_service_1.FolderService, create_folder_service_1.CreateFolderService],
    })
], FolderModule);
exports.FolderModule = FolderModule;
//# sourceMappingURL=folder.module.js.map