/* eslint-disable new-cap */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { BaseEntityProps } from "../domain/base-classes/entity.base";
import { DateVO } from "../domain/value-objects/date.vo";
import { ID } from "../domain/value-objects/id";
import { ObjectLiteral } from "typeorm";
import { TypeormEntityBase } from "./typeorm.entity.base";

export type OrmEntityProps<OrmEntity> = Omit<
  OrmEntity,
  "id" | "createdAt" | "updatedAt"
>;

export abstract class OrmMapper<
  Entity extends BaseEntityProps,
  OrmEntity extends ObjectLiteral
> {
  constructor(
    private entityConstructor: new (...args: any[]) => Entity,
    private ormEntityConstructor: new (...args: any[]) => OrmEntity
  ) {}

  protected abstract toDomainProps(ormEntity: OrmEntity): unknown;

  protected abstract toOrmProps(entity: Entity): OrmEntityProps<OrmEntity>;

  toDomainEntity(ormEntity: OrmEntity): Entity {
    try {
      const props = this.toDomainProps(ormEntity);
      return this.assignPropsToEntity(props, ormEntity);
    } catch (e) {
      console.log("Failed to process entity with orm props", ormEntity);
      console.log(e);
      throw new Error(e);
    }
  }

  toOrmEntity(entity: Entity): OrmEntity {
    const props = this.toOrmProps(entity);
    return new this.ormEntityConstructor({
      ...props,
      id: entity.id.value,
      createdAt: entity.createdAt.value,
      updatedAt: entity.updatedAt.value,
    });
  }

  /** Tricking TypeScript to do mapping from OrmEntity to Entity's protected/private properties.
   * This is done to avoid public setters or accepting all props through constructor.
   * Public setters may corrupt Entity's state. Accepting every property through constructor may
   * conflict with some pre-defined business rules that are validated at object creation.
   * Never use this trick in domain layer. Normally private properties should never be assigned directly.
   */
  private assignPropsToEntity<Props>(
    entityProps: Props,
    ormEntity: OrmEntity
  ): Entity {
    const entityCopy: any = Object.create(this.entityConstructor.prototype);
    const ormEntityBase: TypeormEntityBase =
      ormEntity as unknown as TypeormEntityBase;

    entityCopy.props = entityProps;
    entityCopy._id = new ID(ormEntityBase.id);
    entityCopy._createdAt = new DateVO(ormEntityBase.createdAt);
    entityCopy._updatedAt = new DateVO(ormEntityBase.updatedAt);

    return entityCopy as unknown as Entity;
  }
}
