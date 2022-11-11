"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserOrmMapper = void 0;
const orm_mapper_base_1 = require("../../../common/database/orm-mapper.base");
const users_entity_1 = require("../../domain/users.entity");
const user_orm_entity_1 = require("./user.orm.entity");
class UserOrmMapper extends orm_mapper_base_1.OrmMapper {
    constructor() {
        super(users_entity_1.User, user_orm_entity_1.UserOrm);
    }
    toOrmProps(entity) {
        const ormProps = {
            name: entity.getPropsCopy().name,
            email: entity.getPropsCopy().email,
            description: entity.getPropsCopy().description,
            nickname: entity.getPropsCopy().nickname,
            role: entity.getPropsCopy().role,
            city: entity.getPropsCopy().city,
            state: entity.getPropsCopy().state,
            country: entity.getPropsCopy().country,
            career: entity.getPropsCopy().career,
        };
        return ormProps;
    }
    toDomainProps(ormEntity) {
        const props = {
            name: ormEntity.name,
            email: ormEntity.email,
            description: ormEntity.description,
            nickname: ormEntity.nickname,
            role: users_entity_1.UserRoles[ormEntity.role],
            city: ormEntity.city,
            state: ormEntity.state,
            country: ormEntity.country,
            career: ormEntity.career,
        };
        return props;
    }
}
exports.UserOrmMapper = UserOrmMapper;
//# sourceMappingURL=user.orm.mapper.js.map