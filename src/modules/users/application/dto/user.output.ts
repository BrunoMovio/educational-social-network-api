import { FolderDTO } from "../../../../modules/folders/application/dto/folder.output";
import { User } from "../../domain/users.entity";

export class UserDTO {
  constructor(props: { user: User; firstFolderId?: string }) {
    this.id = props.user.id.value;
    this.name = props.user.name;
    this.nickname = props.user.nickname;
    this.email = props.user.email;
    this.role = props.user.role;
    this.city = props.user.city;
    this.state = props.user.state;
    this.country = props.user.country;
    this.description = props.user.description;
    this.career = props.user.career;
    this.folderId = props.firstFolderId;
  }

  id: string;
  name: string;
  email: string;
  nickname: string;
  role: string;
  city: string;
  state: string;
  country: string;
  description: string;
  career: string;
  folderId?: string;
}
