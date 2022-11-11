import {
  OrmEntityProps,
  OrmMapper,
} from "../../../../../modules/common/database/orm-mapper.base";
import { ID } from "../../../../../modules/common/domain/value-objects/id";
import {
  Post,
  PostProps,
} from "../../../../../modules/posts/domain/post/posts.entity";
import { PostOrm } from "./post.orm.entity";

export class PostOrmMapper extends OrmMapper<Post, PostOrm> {
  constructor() {
    super(Post, PostOrm);
  }
  protected toOrmProps(entity: Post): OrmEntityProps<PostOrm> {
    const ormProps: OrmEntityProps<PostOrm> = {
      userId: entity.getPropsCopy().userId.value,
      folderId: entity.getPropsCopy().folderId.value,
      name: entity.getPropsCopy().name,
      markdown: entity.getPropsCopy().markdown,
      tags: entity.getPropsCopy().tags,
      likes: entity.getPropsCopy().likes,
    };

    return ormProps;
  }

  protected toDomainProps(ormEntity: PostOrm): PostProps {
    const props: PostProps = {
      userId: new ID(ormEntity.userId),
      folderId: new ID(ormEntity.folderId),
      name: ormEntity.name,
      markdown: ormEntity.markdown,
      tags: ormEntity.tags,
      likes: ormEntity.likes,
    };
    return props;
  }
}
