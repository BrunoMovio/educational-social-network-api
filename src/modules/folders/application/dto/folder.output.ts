import { UserDTO } from "../../../../modules/users/application/dto/user.output";
import { Folder } from "../../domain/folder.entity";

export class FolderDTO {
  constructor(input: { folder: Folder; user: UserDTO }) {
    this.id = input.folder.id.value;
    this.title = input.folder.title;
    this.description = input.folder.description;
    this.creationDate =
      input.folder.createdAt.value.toLocaleDateString("fr-CA");
    this.lastUpdateDate =
      input.folder.updatedAt.value.toLocaleDateString("fr-CA");
    this.nickname = input.user.nickname;
  }

  id: string;
  title: string;
  description: string;
  nickname: string;
  creationDate: string;
  lastUpdateDate: string;
}
