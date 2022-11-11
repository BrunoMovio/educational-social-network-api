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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostController = void 0;
const common_1 = require("@nestjs/common");
const passport_1 = require("@nestjs/passport");
const post_service_1 = require("../application/post/post.service");
const create_post_service_1 = require("../application/post/create-post.service");
const post_input_1 = require("../application/post/dto/post.input");
const remove_post_service_1 = require("../application/post/remove-post.service");
const update_post_service_1 = require("../application/post/update-post.service");
let PostController = class PostController {
    constructor(postService, createPostService, updatePostService, removePostService) {
        this.postService = postService;
        this.createPostService = createPostService;
        this.updatePostService = updatePostService;
        this.removePostService = removePostService;
    }
    async createPost(input) {
        try {
            const post = await this.createPostService.create(input);
            return post;
        }
        catch (e) {
            throw new common_1.HttpException({
                status: common_1.HttpStatus.UNPROCESSABLE_ENTITY,
                error: `${e}`,
            }, common_1.HttpStatus.UNPROCESSABLE_ENTITY);
        }
    }
    async updatePost(input) {
        try {
            const post = await this.updatePostService.update(input);
            return post;
        }
        catch (e) {
            throw new common_1.HttpException({
                status: common_1.HttpStatus.NOT_MODIFIED,
                error: `${e}`,
            }, common_1.HttpStatus.NOT_MODIFIED);
        }
    }
    async removePost(id) {
        try {
            const post = await this.removePostService.remove(id);
            return post;
        }
        catch (e) {
            throw new common_1.HttpException({
                status: common_1.HttpStatus.NOT_FOUND,
                error: `${e}`,
            }, common_1.HttpStatus.NOT_FOUND);
        }
    }
    async getPost(id) {
        try {
            const post = await this.postService.findPost(id);
            return post;
        }
        catch (e) {
            throw new common_1.HttpException({
                status: common_1.HttpStatus.NOT_FOUND,
                error: `${e}`,
            }, common_1.HttpStatus.NOT_FOUND);
        }
    }
    async likePost(id) {
        try {
            const post = await this.updatePostService.likePost(id);
            return post;
        }
        catch (e) {
            throw new common_1.HttpException({
                status: common_1.HttpStatus.NOT_MODIFIED,
                error: `${e}`,
            }, common_1.HttpStatus.NOT_FOUND);
        }
    }
    async deslikePost(id) {
        try {
            const post = await this.updatePostService.deslikePost(id);
            return post;
        }
        catch (e) {
            throw new common_1.HttpException({
                status: common_1.HttpStatus.NOT_MODIFIED,
                error: `${e}`,
            }, common_1.HttpStatus.NOT_FOUND);
        }
    }
    async getPostByUserId(userId) {
        try {
            const post = await this.postService.findByUserId(userId);
            return post;
        }
        catch (e) {
            throw new common_1.HttpException({
                status: common_1.HttpStatus.NOT_FOUND,
                error: `${e}`,
            }, common_1.HttpStatus.NOT_FOUND);
        }
    }
    async getPostByFolderId(folderId) {
        try {
            const post = await this.postService.findByFolderId(folderId);
            return post;
        }
        catch (e) {
            throw new common_1.HttpException({
                status: common_1.HttpStatus.NOT_FOUND,
                error: `${e}`,
            }, common_1.HttpStatus.NOT_FOUND);
        }
    }
    async getContentCategory(category) {
        try {
            const posts = await this.postService.findByCategory(category);
            return posts;
        }
        catch (e) {
            console.log(e);
            throw new common_1.HttpException({
                status: common_1.HttpStatus.NOT_FOUND,
                error: `${e}`,
            }, common_1.HttpStatus.NOT_FOUND);
        }
    }
};
__decorate([
    (0, common_1.Post)("create"),
    __param(0, (0, common_1.Body)("input")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [post_input_1.CreatePostInput]),
    __metadata("design:returntype", Promise)
], PostController.prototype, "createPost", null);
__decorate([
    (0, common_1.Post)("update"),
    __param(0, (0, common_1.Body)("input")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [post_input_1.UpdatePostInput]),
    __metadata("design:returntype", Promise)
], PostController.prototype, "updatePost", null);
__decorate([
    (0, common_1.Delete)("remove"),
    __param(0, (0, common_1.Body)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PostController.prototype, "removePost", null);
__decorate([
    (0, common_1.Get)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PostController.prototype, "getPost", null);
__decorate([
    (0, common_1.Post)(":id/like"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PostController.prototype, "likePost", null);
__decorate([
    (0, common_1.Post)(":id/deslike"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PostController.prototype, "deslikePost", null);
__decorate([
    (0, common_1.Get)("user/:userId"),
    __param(0, (0, common_1.Param)("userId")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PostController.prototype, "getPostByUserId", null);
__decorate([
    (0, common_1.Get)("folder/:folderId"),
    __param(0, (0, common_1.Param)("folderId")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PostController.prototype, "getPostByFolderId", null);
__decorate([
    (0, common_1.Get)("index/:category"),
    __param(0, (0, common_1.Param)("category")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PostController.prototype, "getContentCategory", null);
PostController = __decorate([
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)("api-key")),
    (0, common_1.Controller)("post"),
    __metadata("design:paramtypes", [post_service_1.PostService,
        create_post_service_1.CreatePostService,
        update_post_service_1.UpdatePostService,
        remove_post_service_1.RemovePostService])
], PostController);
exports.PostController = PostController;
//# sourceMappingURL=post.controler.js.map