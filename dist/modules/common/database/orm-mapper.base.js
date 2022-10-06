"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrmMapper = void 0;
const date_vo_1 = require("../domain/value-objects/date.vo");
const id_1 = require("../domain/value-objects/id");
class OrmMapper {
    constructor(entityConstructor, ormEntityConstructor) {
        this.entityConstructor = entityConstructor;
        this.ormEntityConstructor = ormEntityConstructor;
    }
    toDomainEntity(ormEntity) {
        try {
            const props = this.toDomainProps(ormEntity);
            return this.assignPropsToEntity(props, ormEntity);
        }
        catch (e) {
            console.log("Failed to process entity with orm props", ormEntity);
            console.log(e);
            throw new Error(e);
        }
    }
    toOrmEntity(entity) {
        const props = this.toOrmProps(entity);
        return new this.ormEntityConstructor(Object.assign(Object.assign({}, props), { id: entity.id.value, createdAt: entity.createdAt.value, updatedAt: entity.updatedAt.value }));
    }
    assignPropsToEntity(entityProps, ormEntity) {
        const entityCopy = Object.create(this.entityConstructor.prototype);
        const ormEntityBase = ormEntity;
        entityCopy.props = entityProps;
        entityCopy._id = new id_1.ID(ormEntityBase.id);
        entityCopy._createdAt = new date_vo_1.DateVO(ormEntityBase.createdAt);
        entityCopy._updatedAt = new date_vo_1.DateVO(ormEntityBase.updatedAt);
        return entityCopy;
    }
}
exports.OrmMapper = OrmMapper;
//# sourceMappingURL=orm-mapper.base.js.map