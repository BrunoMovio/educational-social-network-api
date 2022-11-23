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
exports.UpdatePostService = void 0;
const common_1 = require("@nestjs/common");
const user_service_1 = require("../../../modules/users/application/user.service");
const id_1 = require("../../../modules/common/domain/value-objects/id");
const post_orm_repository_1 = require("../infra/post/post.orm.repository");
const post_output_1 = require("./dto/post.output");
const folder_service_1 = require("../../folders/application/folder.service");
let UpdatePostService = class UpdatePostService {
    constructor(postRepository, userService, folderService) {
        this.postRepository = postRepository;
        this.userService = userService;
        this.folderService = folderService;
    }
    async update(input) {
        const oldPost = await this.postRepository.findOne({
            id: new id_1.ID(input.id),
        });
        oldPost.updatePost({
            userId: new id_1.ID(input.userId),
            title: input.title,
            subtitle: input.subtitle,
            tags: input.tags,
            text: input.text,
        });
        const post = await this.postRepository.save(oldPost);
        const user = await this.userService.findById(post.userId.value);
        if (!user)
            throw new common_1.NotFoundException("User not found");
        const folder = await this.folderService.findById(post.folderId.value);
        if (!folder)
            throw new common_1.NotFoundException("Folder not found");
        return new post_output_1.PostDTO({ post, user, folder });
    }
    async likePost(postId, userId) {
        const post = await this.postRepository.findOneByIdOrThrow(postId);
        post.like(new id_1.ID(userId));
        const user = await this.userService.findById(post.userId.value);
        if (!user)
            throw new common_1.NotFoundException("User not found");
        const folder = await this.folderService.findById(post.folderId.value);
        if (!folder)
            throw new common_1.NotFoundException("Folder not found");
        await this.postRepository.save(post);
        return new post_output_1.PostDTO({ post, user, folder });
    }
    async deslikePost(postId, userId) {
        const post = await this.postRepository.findOneByIdOrThrow(postId);
        post.deslike(new id_1.ID(userId));
        const user = await this.userService.findById(post.userId.value);
        if (!user)
            throw new common_1.NotFoundException("User not found");
        const folder = await this.folderService.findById(post.folderId.value);
        if (!folder)
            throw new common_1.NotFoundException("Folder not found");
        await this.postRepository.save(post);
        return new post_output_1.PostDTO({ post, user, folder });
    }
    async verifyPost(userId, postId) {
        const user = await this.userService.findById(userId);
        if (!user)
            throw new common_1.NotFoundException("User not found");
        const oldPost = await this.postRepository.findOneByIdOrThrow(postId);
        oldPost.verify(user.id, user.role, user.nickname);
        const post = await this.postRepository.save(oldPost);
        const folder = await this.folderService.findById(post.folderId.value);
        if (!folder)
            throw new common_1.NotFoundException("Folder not found");
        return new post_output_1.PostDTO({ post, user, folder });
    }
};
UpdatePostService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [post_orm_repository_1.PostOrmRepository,
        user_service_1.UserService,
        folder_service_1.FolderService])
], UpdatePostService);
exports.UpdatePostService = UpdatePostService;
//# sourceMappingURL=update-post.service.js.map