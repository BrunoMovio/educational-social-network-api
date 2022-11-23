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
exports.CreatePostService = void 0;
const common_1 = require("@nestjs/common");
const folder_service_1 = require("../../folders/application/folder.service");
const user_service_1 = require("../../users/application/user.service");
const posts_factory_1 = require("../domain/posts.factory");
const post_orm_repository_1 = require("../infra/post/post.orm.repository");
const post_output_1 = require("./dto/post.output");
let CreatePostService = class CreatePostService {
    constructor(postRepository, userService, folderService) {
        this.postRepository = postRepository;
        this.userService = userService;
        this.folderService = folderService;
    }
    async create(input) {
        const user = await this.userService.findById(input.userId);
        if (!user)
            throw new common_1.NotFoundException("User not found");
        const folder = await this.folderService.findById(input.folderId);
        if (!folder)
            throw new common_1.NotFoundException("Folder not found");
        const postFactory = new posts_factory_1.PostFactory();
        const post = await postFactory.create(Object.assign({}, input));
        await this.postRepository.save(post);
        return new post_output_1.PostDTO({ post, user, folder });
    }
};
CreatePostService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [post_orm_repository_1.PostOrmRepository,
        user_service_1.UserService,
        folder_service_1.FolderService])
], CreatePostService);
exports.CreatePostService = CreatePostService;
//# sourceMappingURL=create-post.service.js.map