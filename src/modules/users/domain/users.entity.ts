import { Entity } from "../../common/domain/base-classes/entity.base";

export enum UserRoles {
  ADMIN = "ADMIN",
  NORMAL = "NORMAL",
}

export interface UserProps {
  name: string;
  email: string;
  nickname: string;
  description: string;
  role: UserRoles;
  city: string;
  state: string;
  country: string;
  career: string;
}

export class User extends Entity<UserProps> {
  get name(): string {
    return this.props.name;
  }

  get email(): string {
    return this.props.email;
  }

  get nickname(): string {
    return this.props.nickname;
  }

  get description(): string {
    return this.props.description;
  }

  get role(): UserRoles {
    return this.props.role;
  }

  get city(): string {
    return this.props.city;
  }

  get state(): string {
    return this.props.state;
  }

  get country(): string {
    return this.props.country;
  }

  get career(): string {
    return this.props.career;
  }

  updateUser(props: UserProps) {
    if (props.name) this.props.name = props.name;
    if (props.email) this.props.email = props.email;
    if (props.nickname) this.props.nickname = props.nickname;
    if (props.description) this.props.description = props.description;
    if (props.role) this.props.role = props.role;
    if (props.state) this.props.state = props.state;
    if (props.country) this.props.country = props.country;
    if (props.career) this.props.career = props.career;
    if (props.city) this.props.city = props.city;
  }
}
