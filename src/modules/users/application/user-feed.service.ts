import { Injectable } from "@nestjs/common";
import { UserOrmRepository } from "../infra/database/user.orm.repository";
import { UserFeedDTO } from "./dto/user-feed.output";
import { UserDTO } from "./dto/user.output";

@Injectable()
export class UserFeedService {
  constructor(private readonly userRepository: UserOrmRepository) {}

  async findByUser(input: {
    userId: string;
    page?: number;
  }): Promise<UserFeedDTO> {
    const page = input.page ?? 0;
    const users = await this.userRepository.findFeedByUserId(
      input.userId,
      page ?? 0
    );

    const usersToFeed = await Promise.all(
      users.map(async (user) => {
        return new UserDTO({ user });
      })
    );

    return new UserFeedDTO({ usersToFeed, page });
  }
}
