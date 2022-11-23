"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostOrmMapper = void 0;
const orm_mapper_base_1 = require("../../../../modules/common/database/orm-mapper.base");
const id_1 = require("../../../../modules/common/domain/value-objects/id");
const posts_entity_1 = require("../../domain/posts.entity");
const post_orm_entity_1 = require("./post.orm.entity");
class PostOrmMapper extends orm_mapper_base_1.OrmMapper {
    constructor() {
        super(posts_entity_1.Post, post_orm_entity_1.PostOrm);
    }
    toOrmProps(entity) {
        const ormProps = {
            userId: entity.getPropsCopy().userId.value,
            folderId: entity.getPropsCopy().folderId.value,
            title: entity.getPropsCopy().title,
            subtitle: entity.getPropsCopy().subtitle,
            image: entity.getPropsCopy().image,
            text: entity.getPropsCopy().text,
            tags: entity.getPropsCopy().tags,
            likes: entity.getPropsCopy().likes,
            verified: entity.getPropsCopy().verified,
            verifiedBy: entity.getPropsCopy().verifiedBy,
        };
        return ormProps;
    }
    toDomainProps(ormEntity) {
        const props = {
            userId: new id_1.ID(ormEntity.userId),
            folderId: new id_1.ID(ormEntity.folderId),
            title: ormEntity.title,
            subtitle: ormEntity.subtitle,
            image: ormEntity.image,
            text: ormEntity.text,
            tags: ormEntity.tags,
            likes: ormEntity.likes,
            verified: ormEntity.verified,
            verifiedBy: ormEntity.verifiedBy,
        };
        return props;
    }
}
exports.PostOrmMapper = PostOrmMapper;
//# sourceMappingURL=post.orm.mapper.js.map