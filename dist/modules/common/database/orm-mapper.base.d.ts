import { BaseEntityProps } from "../domain/base-classes/entity.base";
import { ObjectLiteral } from "typeorm";
export declare type OrmEntityProps<OrmEntity> = Omit<OrmEntity, "id" | "createdAt" | "updatedAt">;
export declare abstract class OrmMapper<Entity extends BaseEntityProps, OrmEntity extends ObjectLiteral> {
    private entityConstructor;
    private ormEntityConstructor;
    constructor(entityConstructor: new (...args: any[]) => Entity, ormEntityConstructor: new (...args: any[]) => OrmEntity);
    protected abstract toDomainProps(ormEntity: OrmEntity): unknown;
    protected abstract toOrmProps(entity: Entity): OrmEntityProps<OrmEntity>;
    toDomainEntity(ormEntity: OrmEntity): Entity;
    toOrmEntity(entity: Entity): OrmEntity;
    private assignPropsToEntity;
}
