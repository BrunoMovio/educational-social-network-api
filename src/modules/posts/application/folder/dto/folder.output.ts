import { Folder } from "../../../../../modules/posts/domain/folder/folder.entity";

export class FolderDTO {
  constructor(props: Folder) {
    this.id = props.id.value;
    this.name = props.name;
  }

  id: string;
  name: string;
}
