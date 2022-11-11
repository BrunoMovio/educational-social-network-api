import { FolderDTO } from "src/modules/posts/application/folder/dto/folder.output";
import { User } from "../../domain/users.entity";

export class UserDTO {
  constructor(props: User, folder?: FolderDTO) {
    console.log(folder);
    this.id = props.id.value;
    this.name = props.name;
    this.nickname = props.nickname;
    this.email = props.email;
    this.role = props.role;
    this.city = props.city;
    this.state = props.state;
    this.country = props.country;
    this.description = props.description;
    this.career = props.career;
    this.folderId = folder && folder.id;
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
