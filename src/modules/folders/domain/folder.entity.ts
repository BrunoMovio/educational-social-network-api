import { Entity } from "../../common/domain/base-classes/entity.base";
import { ID } from "../../common/domain/value-objects/id";

export interface FolderProps {
  userId: ID;
  title: string;
  description: string;
}

export class Folder extends Entity<FolderProps> {
  get userId(): ID {
    return this.props.userId;
  }

  get title(): string {
    return this.props.title;
  }

  get description(): string {
    return this.props.description;
  }

  updateFolder(props: Partial<FolderProps>) {
    if (props.title) this.props.title = props.title;
    if (props.description) this.props.description = props.description;
  }
}
