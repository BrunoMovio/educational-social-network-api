import { BaseEntityProps } from "../domain/base-classes/entity.base";
import { Logger } from "../domain/ports/logger.port";
import { RepositoryPort, QueryParams, FindManyPaginatedParams, DataWithPaginationMeta } from "../domain/ports/repository.ports";
import { ID } from "../domain/value-objects/id";
import { DeepPartial, FindConditions, ObjectLiteral, Repository } from "typeorm";
import { OrmMapper } from "./orm-mapper.base";
export declare type WhereCondition<OrmEntity> = FindConditions<OrmEntity>[] | FindConditions<OrmEntity> | ObjectLiteral | string;
export declare abstract class TypeormRepositoryBase<Entity extends BaseEntityProps, EntityProps, OrmEntity extends DeepPartial<OrmEntity>> implements RepositoryPort<Entity, EntityProps> {
    protected readonly repository: Repository<OrmEntity>;
    protected readonly mapper: OrmMapper<Entity, OrmEntity>;
    protected readonly logger: Logger;
    protected constructor(repository: Repository<OrmEntity>, mapper: OrmMapper<Entity, OrmEntity>, logger: Logger);
    protected abstract relations: string[];
    protected tableName: string;
    protected abstract prepareQuery(params: QueryParams<EntityProps>): WhereCondition<OrmEntity>;
    save(entity: Entity): Promise<Entity>;
    saveMultiple(entities: Entity[]): Promise<Entity[]>;
    findOne(params?: QueryParams<EntityProps>): Promise<Entity | undefined>;
    findOneOrThrow(params?: QueryParams<EntityProps>): Promise<Entity>;
    findOneByIdOrThrow(id: ID | string): Promise<Entity>;
    findMany(params?: QueryParams<EntityProps>): Promise<Entity[]>;
    findManyPaginated({ params, pagination, orderBy, }: FindManyPaginatedParams<EntityProps>): Promise<DataWithPaginationMeta<Entity[]>>;
    delete(entity: Entity): Promise<Entity>;
}
