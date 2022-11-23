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
exports.PostOrmRepository = exports.Includes = void 0;
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const common_1 = require("@nestjs/common");
const post_orm_entity_1 = require("./post.orm.entity");
const post_orm_mapper_1 = require("./post.orm.mapper");
const typeorm_3 = require("typeorm");
const typeorm_repository_base_1 = require("../../../common/database/typeorm.repository.base");
const Includes = (value) => (0, typeorm_3.Raw)((columnAlias) => `:value = ANY(${columnAlias})`, { value });
exports.Includes = Includes;
let PostOrmRepository = class PostOrmRepository extends typeorm_repository_base_1.TypeormRepositoryBase {
    constructor(postRepository) {
        super(postRepository, new post_orm_mapper_1.PostOrmMapper(), new common_1.Logger("post-repository"));
        this.postRepository = postRepository;
        this.relations = [];
        this.PAGE_SIZE = 10;
    }
    async findManyByCategory(tag) {
        const posts = await this.postRepository
            .createQueryBuilder()
            .select()
            .where(`tags->'category' @> '"${tag}"'`)
            .getMany();
        return posts.map((post) => this.mapper.toDomainEntity(post));
    }
    async findManyByUserId(userId) {
        const posts = await this.postRepository.find({
            where: {
                userId,
            },
        });
        return posts.map((post) => this.mapper.toDomainEntity(post));
    }
    async findFeedByUserId(userId, page) {
        const posts = await this.postRepository.find({
            where: {
                userId: (0, typeorm_2.Not)(userId),
            },
            take: this.PAGE_SIZE,
            skip: page * this.PAGE_SIZE,
        });
        return posts.map((post) => this.mapper.toDomainEntity(post));
    }
    async findUnverifiedPosts(page) {
        const posts = await this.postRepository.find({
            where: {
                verified: (0, typeorm_2.Not)(true),
            },
            take: this.PAGE_SIZE,
            skip: page * this.PAGE_SIZE,
        });
        return posts.map((post) => this.mapper.toDomainEntity(post));
    }
    async findVerifiedPosts(page) {
        const posts = await this.postRepository.find({
            where: {
                verified: true,
            },
            take: this.PAGE_SIZE,
            skip: page * this.PAGE_SIZE,
        });
        return posts.map((post) => this.mapper.toDomainEntity(post));
    }
    async findManyByFolderId(folderId) {
        const posts = await this.postRepository.find({
            where: {
                folderId,
            },
        });
        return posts.map((post) => this.mapper.toDomainEntity(post));
    }
    async findOneByTitle(title) {
        const posts = await this.postRepository.find({
            where: {
                title,
            },
        });
        return this.mapper.toDomainEntity(posts[0]);
    }
    prepareQuery(params) {
        const where = {};
        if (params.id) {
            where.id = params.id.value;
        }
        if (params.userId) {
            where.userId = params.userId.value;
        }
        if (params.folderId) {
            where.folderId = params.folderId.value;
        }
        if (params.title) {
            where.title = params.title;
        }
        if (params.subtitle) {
            where.subtitle = params.subtitle;
        }
        if (params.tags) {
            where.tags = params.tags;
        }
        if (params.text) {
            where.text = params.text;
        }
        if (params.likes) {
            where.likes = params.likes;
        }
        if (params.verified) {
            where.verified = params.verified;
        }
        if (params.verifiedBy) {
            where.verifiedBy = params.verifiedBy;
        }
        return where;
    }
};
PostOrmRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(post_orm_entity_1.PostOrm)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], PostOrmRepository);
exports.PostOrmRepository = PostOrmRepository;
//# sourceMappingURL=post.orm.repository.js.map