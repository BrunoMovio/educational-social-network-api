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
exports.FolderOrmRepository = void 0;
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const common_1 = require("@nestjs/common");
const folder_orm_entity_1 = require("./folder.orm.entity");
const folder_orm_mapper_1 = require("./folder.orm.mapper");
const typeorm_repository_base_1 = require("../../../modules/common/database/typeorm.repository.base");
let FolderOrmRepository = class FolderOrmRepository extends typeorm_repository_base_1.TypeormRepositoryBase {
    constructor(folderRepository) {
        super(folderRepository, new folder_orm_mapper_1.FolderOrmMapper(), new common_1.Logger("folder-repository"));
        this.folderRepository = folderRepository;
        this.relations = [];
        this.PAGE_SIZE = 5;
    }
    async findManyByUserId(userId) {
        const folders = await this.folderRepository.find({
            where: {
                userId,
            },
        });
        return folders.map((content) => this.mapper.toDomainEntity(content));
    }
    async findOneByTitle(title) {
        const folder = await this.folderRepository.findOne({
            where: {
                title,
            },
        });
        return this.mapper.toDomainEntity(folder);
    }
    async findFeedByUserId(userId, page) {
        const folders = await this.folderRepository.find({
            where: {
                userId: (0, typeorm_2.Not)(userId),
            },
            take: this.PAGE_SIZE,
            skip: page * this.PAGE_SIZE,
        });
        return folders.map((post) => this.mapper.toDomainEntity(post));
    }
    prepareQuery(params) {
        const where = {};
        if (params.id) {
            where.id = params.id.value;
        }
        if (params.userId) {
            where.userId = params.userId.value;
        }
        if (params.title) {
            where.title = params.title;
        }
        if (params.description) {
            where.description = params.description;
        }
        if (params.createdAt) {
            where.createdAt = params.createdAt;
        }
        if (params.updatedAt) {
            where.updatedAt = params.updatedAt;
        }
        return where;
    }
};
FolderOrmRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(folder_orm_entity_1.FolderOrm)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], FolderOrmRepository);
exports.FolderOrmRepository = FolderOrmRepository;
//# sourceMappingURL=folder.orm.repository.js.map