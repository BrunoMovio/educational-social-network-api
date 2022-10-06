import { User } from "../../domain/users.entity";

export class UserDTO {
  constructor(props: User) {
    this.id = props.id.value;
    this.name = props.name;
    this.description = props.description;
    this.birthday = props.birthday.value.toLocaleDateString();
    this.avatar = props.avatar;
  }

  id: string;
  name: string;
  description: string;
  birthday: string;
  avatar: string;
}
