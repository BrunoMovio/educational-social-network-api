import { UserDTO } from "./user.output";

export class UserFeedDTO {
  constructor(props: { usersToFeed: UserDTO[]; page: number }) {
    this.users = props.usersToFeed;
    this.page = props.page;
  }

  users: UserDTO[];
  page: number;
}
