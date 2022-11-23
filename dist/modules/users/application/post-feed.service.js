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
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostFeedService = void 0;
const common_1 = require("@nestjs/common");
const folder_service_1 = require("../../folders/application/folder.service");
const user_service_1 = require("./user.service");
const post_orm_repository_1 = require("../infra/post/post.orm.repository");
const post_feed_output_1 = require("./dto/post-feed.output");
const post_output_1 = require("./dto/post.output");
let PostFeedService = class PostFeedService {
    constructor(postRepository, userService, folderService) {
        this.postRepository = postRepository;
        this.userService = userService;
        this.folderService = folderService;
    }
    async findByUser(input) {
        var _a;
        const page = (_a = input.page) !== null && _a !== void 0 ? _a : 0;
        const posts = await this.postRepository.findFeedByUserId(input.userId, page !== null && page !== void 0 ? page : 0);
        const postsToFeed = await Promise.all(posts.map(async (post) => {
            const user = await this.userService.findById(post.userId.value);
            if (!user)
                throw new common_1.NotFoundException("User not found");
            const folder = await this.folderService.findById(post.folderId.value);
            if (!folder)
                throw new common_1.NotFoundException("Folder not found");
            return new post_output_1.PostDTO({ post, user, folder });
        }));
        return new post_feed_output_1.PostFeedDTO({ postsToFeed, page });
    }
    async findUnverified(input) {
        var _a;
        const page = (_a = input.page) !== null && _a !== void 0 ? _a : 0;
        const posts = await this.postRepository.findUnverifiedPosts(page !== null && page !== void 0 ? page : 0);
        const postsToFeed = await Promise.all(posts.map(async (post) => {
            const user = await this.userService.findById(post.userId.value);
            if (!user)
                throw new common_1.NotFoundException("User not found");
            const folder = await this.folderService.findById(post.folderId.value);
            if (!folder)
                throw new common_1.NotFoundException("Folder not found");
            return new post_output_1.PostDTO({ post, user, folder });
        }));
        return new post_feed_output_1.PostFeedDTO({ postsToFeed, page });
    }
    async findVerified(input) {
        var _a;
        const page = (_a = input.page) !== null && _a !== void 0 ? _a : 0;
        const posts = await this.postRepository.findVerifiedPosts(page !== null && page !== void 0 ? page : 0);
        const postsToFeed = await Promise.all(posts.map(async (post) => {
            const user = await this.userService.findById(post.userId.value);
            if (!user)
                throw new common_1.NotFoundException("User not found");
            const folder = await this.folderService.findById(post.folderId.value);
            if (!folder)
                throw new common_1.NotFoundException("Folder not found");
            return new post_output_1.PostDTO({ post, user, folder });
        }));
        return new post_feed_output_1.PostFeedDTO({ postsToFeed, page });
    }
};
PostFeedService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof post_orm_repository_1.PostOrmRepository !== "undefined" && post_orm_repository_1.PostOrmRepository) === "function" ? _a : Object, user_service_1.UserService,
        folder_service_1.FolderService])
], PostFeedService);
exports.PostFeedService = PostFeedService;
//# sourceMappingURL=post-feed.service.js.map