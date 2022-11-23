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
const id_1 = require("../../../../modules/common/domain/value-objects/id");
const post_orm_repository_1 = require("../../infra/database/post/post.orm.repository");
const post_output_1 = require("./dto/post.output");
let UpdatePostService = class UpdatePostService {
    constructor(postRepository) {
        this.postRepository = postRepository;
    }
    async update(input) {
        const post = await this.postRepository.findOne({
            id: new id_1.ID(input.id),
        });
        post.updatePost({
            userId: new id_1.ID(input.userId),
            name: input.title,
            tags: input.tags,
            markdown: input.markdown,
            likes: post.likes,
        });
        const savedPost = await this.postRepository.save(post);
        return new post_output_1.PostDTO(savedPost);
    }
    async likePost(id) {
        const post = await this.postRepository.findOneByIdOrThrow(id);
        post.like();
        const savedPost = await this.postRepository.save(post);
        return new post_output_1.PostDTO(savedPost);
    }
    async deslikePost(id) {
        const post = await this.postRepository.findOneByIdOrThrow(id);
        post.deslike();
        const savedPost = await this.postRepository.save(post);
        return new post_output_1.PostDTO(savedPost);
    }
};
UpdatePostService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [post_orm_repository_1.PostOrmRepository])
], UpdatePostService);
exports.UpdatePostService = UpdatePostService;
//# sourceMappingURL=update-post.service.js.map