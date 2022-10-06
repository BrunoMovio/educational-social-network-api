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
const id_1 = require("../../../modules/common/domain/value-objects/id");
const post_orm_repository_1 = require("../infra/database/post.orm.repository");
const post_output_1 = require("./dto/post.output");
let PostService = class PostService {
    constructor(postRepository) {
        this.postRepository = postRepository;
    }
    async findAll() {
        const posts = await this.postRepository.findMany();
        return posts.map((content) => new post_output_1.PostDTO(content));
    }
    async findByCategory(category) {
        const posts = await this.postRepository.findManyByCategory(category);
        return posts.map((content) => new post_output_1.PostDTO(content));
    }
    async findByUserId(userId) {
        const posts = await this.postRepository.findManyByUserId(userId);
        return posts.map((content) => new post_output_1.PostDTO(content));
    }
    async findPost(id) {
        try {
            const post = await this.postRepository.findOne({ id: new id_1.ID(id) });
            return new post_output_1.PostDTO(post);
        }
        catch (e) {
            throw new common_1.NotFoundException("Post not found with id: " + id);
        }
    }
    async findPostByName(name) {
        try {
            const post = await this.postRepository.findOneByName(name);
            return new post_output_1.PostDTO(post);
        }
        catch (e) {
            throw new common_1.NotFoundException("Post not found with name: " + name);
        }
    }
};
PostService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [post_orm_repository_1.PostOrmRepository])
], PostService);
exports.PostService = PostService;
//# sourceMappingURL=post.service.js.map