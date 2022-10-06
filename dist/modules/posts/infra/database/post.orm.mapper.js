"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostOrmMapper = void 0;
const orm_mapper_base_1 = require("../../../common/database/orm-mapper.base");
const id_1 = require("../../../common/domain/value-objects/id");
const posts_entity_1 = require("../../domain/posts.entity");
const post_orm_entity_1 = require("./post.orm.entity");
class PostOrmMapper extends orm_mapper_base_1.OrmMapper {
    constructor() {
        super(posts_entity_1.Post, post_orm_entity_1.PostOrm);
    }
    toOrmProps(entity) {
        const ormProps = {
            userId: entity.getPropsCopy().userId.value,
            name: entity.getPropsCopy().name,
            markdown: entity.getPropsCopy().markdown,
            tags: entity.getPropsCopy().tags,
            likes: entity.getPropsCopy().likes,
        };
        return ormProps;
    }
    toDomainProps(ormEntity) {
        const props = {
            userId: new id_1.ID(ormEntity.userId),
            name: ormEntity.name,
            markdown: ormEntity.markdown,
            tags: ormEntity.tags,
            likes: ormEntity.likes,
        };
        return props;
    }
}
exports.PostOrmMapper = PostOrmMapper;
//# sourceMappingURL=post.orm.mapper.js.map