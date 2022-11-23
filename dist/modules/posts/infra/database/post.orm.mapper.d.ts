import { OrmEntityProps, OrmMapper } from "../../../../modules/common/database/orm-mapper.base";
import { Post, PostProps } from "../../domain/posts.entity";
import { PostOrm } from "./post.orm.entity";
export declare class PostOrmMapper extends OrmMapper<Post, PostOrm> {
    constructor();
    protected toOrmProps(entity: Post): OrmEntityProps<PostOrm>;
    protected toDomainProps(ormEntity: PostOrm): PostProps;
}
