import { UserDTO } from "./user.output";
export declare class UserFeedDTO {
    constructor(props: {
        usersToFeed: UserDTO[];
        page: number;
    });
    users: UserDTO[];
    page: number;
}
