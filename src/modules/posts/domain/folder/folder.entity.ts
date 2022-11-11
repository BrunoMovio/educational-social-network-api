import { NotFoundException } from "@nestjs/common";
import { Entity } from "../../../common/domain/base-classes/entity.base";
import { ID } from "../../../common/domain/value-objects/id";
import { Post } from "../post/posts.entity";

export interface FolderProps {
  userId: ID;
  name: string;
}

export class Folder extends Entity<FolderProps> {
  get userId(): ID {
    return this.props.userId;
  }

  get name(): string {
    return this.props.name;
  }

  updateFolder(props: Partial<FolderProps>) {
    if (props.name) this.props.name = props.name;
  }
}
