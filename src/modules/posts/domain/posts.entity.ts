import { User } from "src/modules/users/domain/users.entity";
import { UserOrm } from "src/modules/users/infra/database/user.orm.entity";
import { Entity } from "../../common/domain/base-classes/entity.base";
import { ID } from "../../common/domain/value-objects/id";

export interface PostProps {
  userId: ID;
  name: string;
  markdown: string;
  tags: PostTags;
  likes: number;
}

export interface PostTags {
  category: string;
}

export class Post extends Entity<PostProps> {
  get userId(): ID {
    return this.props.userId;
  }

  get name(): string {
    return this.props.name;
  }

  get markdown(): string {
    return this.props.markdown;
  }

  get likes(): number {
    return this.props.likes;
  }

  get tags(): PostTags {
    return this.props.tags;
  }

  like() {
    this.props.likes++;
  }

  deslike() {
    this.props.likes--;
  }

  updatePost(props: PostProps) {
    if (props.name) this.props.name = props.name;
    if (props.markdown) this.props.markdown = props.markdown;
    if (props.likes) this.props.likes = props.likes;
    if (props.tags) this.props.tags = props.tags;
  }
}
