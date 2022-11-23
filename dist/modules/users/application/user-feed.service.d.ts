import { UserOrmRepository } from "../infra/database/user.orm.repository";
import { UserFeedDTO } from "./dto/user-feed.output";
export declare class UserFeedService {
    private readonly userRepository;
    constructor(userRepository: UserOrmRepository);
    findByUser(input: {
        userId: string;
        page?: number;
    }): Promise<UserFeedDTO>;
}
