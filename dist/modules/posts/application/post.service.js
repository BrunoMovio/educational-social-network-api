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
exports.PostService = void 0;
const common_1 = require("@nestjs/common");
const folder_service_1 = require("../../folders/application/folder.service");
const user_service_1 = require("../../users/application/user.service");
const id_1 = require("../../../modules/common/domain/value-objects/id");
const post_orm_repository_1 = require("../infra/post/post.orm.repository");
const post_output_1 = require("./dto/post.output");
let PostService = class PostService {
    constructor(postRepository, userService, folderService) {
        this.postRepository = postRepository;
        this.userService = userService;
        this.folderService = folderService;
    }
    async findAll() {
        try {
            const posts = await this.postRepository.findMany();
            return Promise.all(posts.map(async (post) => {
                const user = await this.userService.findById(post.userId.value);
                if (!user)
                    throw new common_1.NotFoundException("User not found");
                const folder = await this.folderService.findById(post.folderId.value);
                if (!folder)
                    throw new common_1.NotFoundException("Folder not found");
                return new post_output_1.PostDTO({ post, user, folder });
            }));
        }
        catch (e) {
            throw new common_1.NotFoundException("Posts not found");
        }
    }
    async findByCategory(category) {
        try {
            const posts = await this.postRepository.findManyByCategory(category);
            return Promise.all(posts.map(async (post) => {
                const user = await this.userService.findById(post.userId.value);
                if (!user)
                    throw new common_1.NotFoundException("User not found");
                const folder = await this.folderService.findById(post.folderId.value);
                if (!folder)
                    throw new common_1.NotFoundException("Folder not found");
                return new post_output_1.PostDTO({ post, user, folder });
            }));
        }
        catch (e) {
            throw new common_1.NotFoundException("Posts not found with category: " + category);
        }
    }
    async findByUserId(userId) {
        try {
            const posts = await this.postRepository.findManyByUserId(userId);
            return Promise.all(posts.map(async (post) => {
                const user = await this.userService.findById(post.userId.value);
                if (!user)
                    throw new common_1.NotFoundException("User not found");
                const folder = await this.folderService.findById(post.folderId.value);
                if (!folder)
                    throw new common_1.NotFoundException("Folder not found");
                return new post_output_1.PostDTO({ post, user, folder });
            }));
        }
        catch (e) {
            throw new common_1.NotFoundException("Post not found with userId: " + userId);
        }
    }
    async findByFolderId(folderId) {
        try {
            const posts = await this.postRepository.findManyByFolderId(folderId);
            return Promise.all(posts.map(async (post) => {
                const user = await this.userService.findById(post.userId.value);
                if (!user)
                    throw new common_1.NotFoundException("User not found");
                const folder = await this.folderService.findById(post.folderId.value);
                if (!folder)
                    throw new common_1.NotFoundException("Folder not found");
                return new post_output_1.PostDTO({ post, user, folder });
            }));
        }
        catch (e) {
            throw new common_1.NotFoundException("Post not found with folderId: " + folderId);
        }
    }
    async findPost(id) {
        try {
            const post = await this.postRepository.findOne({ id: new id_1.ID(id) });
            const user = await this.userService.findById(post.userId.value);
            if (!user)
                throw new common_1.NotFoundException("User not found");
            const folder = await this.folderService.findById(post.folderId.value);
            if (!folder)
                throw new common_1.NotFoundException("Folder not found");
            return new post_output_1.PostDTO({ post, user, folder });
        }
        catch (e) {
            throw new common_1.NotFoundException("Post not found with id: " + id);
        }
    }
    async findPostByName(name) {
        try {
            const post = await this.postRepository.findOneByTitle(name);
            const user = await this.userService.findById(post.userId.value);
            if (!user)
                throw new common_1.NotFoundException("User not found");
            const folder = await this.folderService.findById(post.folderId.value);
            if (!folder)
                throw new common_1.NotFoundException("Folder not found");
            return new post_output_1.PostDTO({ post, user, folder });
        }
        catch (e) {
            throw new common_1.NotFoundException("Post not found with name: " + name);
        }
    }
};
PostService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [post_orm_repository_1.PostOrmRepository,
        user_service_1.UserService,
        folder_service_1.FolderService])
], PostService);
exports.PostService = PostService;
//# sourceMappingURL=post.service.js.map