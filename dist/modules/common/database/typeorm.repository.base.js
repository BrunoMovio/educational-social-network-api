"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TypeormRepositoryBase = void 0;
const exceptions_1 = require("../domain/exceptions");
const id_1 = require("../domain/value-objects/id");
class TypeormRepositoryBase {
    constructor(repository, mapper, logger) {
        this.repository = repository;
        this.mapper = mapper;
        this.logger = logger;
        this.tableName = this.repository.metadata.tableName;
    }
    async save(entity) {
        const ormEntity = this.mapper.toOrmEntity(entity);
        const result = await this.repository.save(ormEntity);
        this.logger.debug(`[Entity persisted]: ${this.tableName} ${entity.id.value}`);
        return this.mapper.toDomainEntity(result);
    }
    async saveMultiple(entities) {
        const ormEntities = entities.map((entity) => this.mapper.toOrmEntity(entity));
        const result = await this.repository.save(ormEntities);
        this.logger.debug(`[Multiple entities persisted]: ${entities.length} ${this.tableName}`);
        return result.map((entity) => this.mapper.toDomainEntity(entity));
    }
    async findOne(params = {}) {
        const where = this.prepareQuery(params);
        const found = await this.repository.findOne({
            where,
            relations: this.relations,
        });
        return found ? this.mapper.toDomainEntity(found) : undefined;
    }
    async findOneOrThrow(params = {}) {
        const found = await this.findOne(params);
        if (!found) {
            throw new exceptions_1.NotFoundException();
        }
        return found;
    }
    async findOneByIdOrThrow(id) {
        const found = await this.repository.findOne({
            where: { id: id instanceof id_1.ID ? id.value : id },
        });
        if (!found) {
            throw new exceptions_1.NotFoundException();
        }
        return this.mapper.toDomainEntity(found);
    }
    async findMany(params = {}) {
        const result = await this.repository.find({
            where: this.prepareQuery(params),
            relations: this.relations,
        });
        return result.map((item) => this.mapper.toDomainEntity(item));
    }
    async findManyPaginated({ params = {}, pagination, orderBy, }) {
        const [data, count] = await this.repository.findAndCount({
            skip: pagination === null || pagination === void 0 ? void 0 : pagination.skip,
            take: pagination === null || pagination === void 0 ? void 0 : pagination.limit,
            where: this.prepareQuery(params),
            order: orderBy,
            relations: this.relations,
        });
        const result = {
            data: data.map((item) => this.mapper.toDomainEntity(item)),
            count,
            limit: pagination === null || pagination === void 0 ? void 0 : pagination.limit,
            page: pagination === null || pagination === void 0 ? void 0 : pagination.page,
        };
        return result;
    }
    async delete(entity) {
        await this.repository.remove(this.mapper.toOrmEntity(entity));
        this.logger.debug(`[Entity deleted]: ${this.tableName} ${entity.id.value}`);
        return entity;
    }
}
exports.TypeormRepositoryBase = TypeormRepositoryBase;
//# sourceMappingURL=typeorm.repository.base.js.map