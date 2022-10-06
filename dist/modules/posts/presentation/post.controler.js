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
const post_service_1 = require("../application/post.service");
const create_post_service_1 = require("../application/create-post.service");
const post_input_1 = require("../application/dto/post.input");
const remove_post_service_1 = require("../application/remove-post.service");
const update_post_service_1 = require("../application/update-post.service");
let PostController = class PostController {
    constructor(postService, createPostService, updatePostService, removePostService) {
        this.postService = postService;
        this.createPostService = createPostService;
        this.updatePostService = updatePostService;
        this.removePostService = removePostService;
    }
    async createPost(input) {
        return this.createPostService.create(input);
    }
    async updatePost(input) {
        return this.updatePostService.update(input);
    }
    async removePost(id) {
        return this.removePostService.remove(id);
    }
    async getPost(id) {
        return this.postService.findPost(id);
    }
    async likePost(id) {
        return this.updatePostService.likePost(id);
    }
    async deslikePost(id) {
        return this.updatePostService.deslikePost(id);
    }
    async getPostByUserId(userId) {
        return this.postService.findByUserId(userId);
    }
    async getContentCategory(category) {
        return this.postService.findByCategory(category);
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