"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const post_service_1 = require("./application/post/post.service");
const create_post_service_1 = require("./application/post/create-post.service");
const remove_post_service_1 = require("./application/post/remove-post.service");
const update_post_service_1 = require("./application/post/update-post.service");
const posts_factory_1 = require("./domain/post/posts.factory");
const post_orm_entity_1 = require("./infra/database/post/post.orm.entity");
const post_orm_mapper_1 = require("./infra/database/post/post.orm.mapper");
const post_orm_repository_1 = require("./infra/database/post/post.orm.repository");
const post_controler_1 = require("./presentation/post.controler");
const folder_orm_repository_1 = require("./infra/database/folder/folder.orm.repository");
const folder_factory_1 = require("./domain/folder/folder.factory");
const folder_service_1 = require("./application/folder/folder.service");
const create_folder_service_1 = require("./application/folder/create-folder.service");
const update_folder_service_1 = require("./application/folder/update-folder.service");
const remove_folder_service_1 = require("./application/folder/remove-folder.service");
const folder_orm_mapper_1 = require("./infra/database/folder/folder.orm.mapper");
const folder_orm_entity_1 = require("./infra/database/folder/folder.orm.entity");
const folder_controler_1 = require("./presentation/folder.controler");
let PostModule = class PostModule {
};
PostModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([post_orm_entity_1.PostOrm]),
            typeorm_1.TypeOrmModule.forFeature([folder_orm_entity_1.FolderOrm]),
        ],
        providers: [
            post_orm_repository_1.PostOrmRepository,
            posts_factory_1.PostFactory,
            post_service_1.PostService,
            create_post_service_1.CreatePostService,
            update_post_service_1.UpdatePostService,
            remove_post_service_1.RemovePostService,
            post_orm_mapper_1.PostOrmMapper,
            folder_orm_repository_1.FolderOrmRepository,
            folder_factory_1.FolderFactory,
            folder_service_1.FolderService,
            create_folder_service_1.CreateFolderService,
            update_folder_service_1.UpdateFolderService,
            remove_folder_service_1.RemoveFolderService,
            folder_orm_mapper_1.FolderOrmMapper,
        ],
        controllers: [post_controler_1.PostController, folder_controler_1.FolderController],
        exports: [post_service_1.PostService, folder_service_1.FolderService, create_folder_service_1.CreateFolderService],
    })
], PostModule);
exports.PostModule = PostModule;
//# sourceMappingURL=post.module.js.map