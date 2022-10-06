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
const post_service_1 = require("./application/post.service");
const create_post_service_1 = require("./application/create-post.service");
const remove_post_service_1 = require("./application/remove-post.service");
const update_post_service_1 = require("./application/update-post.service");
const posts_factory_1 = require("./domain/posts.factory");
const post_orm_entity_1 = require("./infra/database/post.orm.entity");
const post_orm_mapper_1 = require("./infra/database/post.orm.mapper");
const post_orm_repository_1 = require("./infra/database/post.orm.repository");
const post_controler_1 = require("./presentation/post.controler");
let PostModule = class PostModule {
};
PostModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([post_orm_entity_1.PostOrm])],
        providers: [
            post_orm_repository_1.PostOrmRepository,
            posts_factory_1.PostFactory,
            post_service_1.PostService,
            create_post_service_1.CreatePostService,
            update_post_service_1.UpdatePostService,
            remove_post_service_1.RemovePostService,
            post_orm_mapper_1.PostOrmMapper,
        ],
        controllers: [post_controler_1.PostController],
        exports: [post_service_1.PostService],
    })
], PostModule);
exports.PostModule = PostModule;
//# sourceMappingURL=post.module.js.map