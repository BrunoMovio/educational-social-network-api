import {
  OrmEntityProps,
  OrmMapper,
} from "../../../common/database/orm-mapper.base";
import { ID } from "../../../common/domain/value-objects/id";
import { Post, PostProps } from "../../domain/posts.entity";
import { PostOrm } from "./post.orm.entity";

export class PostOrmMapper extends OrmMapper<Post, PostOrm> {
  constructor() {
    super(Post, PostOrm);
  }
  protected toOrmProps(entity: Post): OrmEntityProps<PostOrm> {
    const ormProps: OrmEntityProps<PostOrm> = {
      userId: entity.getPropsCopy().userId.value,
      folderId: entity.getPropsCopy().folderId.value,
      title: entity.getPropsCopy().title,
      subtitle: entity.getPropsCopy().subtitle,
      image: entity.getPropsCopy().image,
      text: entity.getPropsCopy().text,
      tags: entity.getPropsCopy().tags,
      likes: entity.getPropsCopy().likes,
      usersLiked: entity
        .getPropsCopy()
        .usersLiked.map((userLiked) => userLiked.value),
      verified: entity.getPropsCopy().verified,
      verifiedBy: entity.getPropsCopy().verifiedBy,
    };

    return ormProps;
  }

  protected toDomainProps(ormEntity: PostOrm): PostProps {
    const props: PostProps = {
      userId: new ID(ormEntity.userId),
      folderId: new ID(ormEntity.folderId),
      title: ormEntity.title,
      subtitle: ormEntity.subtitle,
      image: ormEntity.image,
      text: ormEntity.text,
      tags: ormEntity.tags,
      likes: ormEntity.likes,
      usersLiked: ormEntity.usersLiked.map((userLiked) => new ID(userLiked)),
      verified: ormEntity.verified,
      verifiedBy: ormEntity.verifiedBy,
    };
    return props;
  }
}
