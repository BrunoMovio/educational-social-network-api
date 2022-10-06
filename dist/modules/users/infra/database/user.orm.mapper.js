"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserOrmMapper = void 0;
const orm_mapper_base_1 = require("../../../common/database/orm-mapper.base");
const date_vo_1 = require("../../../common/domain/value-objects/date.vo");
const users_entity_1 = require("../../domain/users.entity");
const user_orm_entity_1 = require("./user.orm.entity");
class UserOrmMapper extends orm_mapper_base_1.OrmMapper {
    constructor() {
        super(users_entity_1.User, user_orm_entity_1.UserOrm);
    }
    toOrmProps(entity) {
        const ormProps = {
            name: entity.getPropsCopy().name,
            description: entity.getPropsCopy().description,
            avatar: entity.getPropsCopy().avatar,
            birthday: entity.getPropsCopy().birthday.value.toISOString(),
        };
        return ormProps;
    }
    toDomainProps(ormEntity) {
        const props = {
            name: ormEntity.name,
            description: ormEntity.description,
            avatar: ormEntity.avatar,
            birthday: new date_vo_1.DateVO(ormEntity.birthday),
        };
        return props;
    }
}
exports.UserOrmMapper = UserOrmMapper;
//# sourceMappingURL=user.orm.mapper.js.map