import { Entity } from "../../common/domain/base-classes/entity.base";
import { DateVO } from "../../common/domain/value-objects/date.vo";

export interface UserProps {
  name: string;
  birthday: DateVO;
  description: string;
  avatar?: string;
}

export class User extends Entity<UserProps> {
  get name(): string {
    return this.props.name;
  }

  get birthday(): DateVO {
    return this.props.birthday;
  }

  get description(): string {
    return this.props.description;
  }

  get avatar(): string {
    return this.props.avatar;
  }

  updateUser(props: UserProps) {
    if (props.name) this.props.name = props.name;
    if (props.description) this.props.description = props.description;
    if (props.avatar) this.props.avatar = props.avatar;
    if (props.birthday) this.props.birthday = props.birthday;
  }
}
