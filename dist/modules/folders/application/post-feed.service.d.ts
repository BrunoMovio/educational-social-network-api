import { FolderService } from "src/modules/folders/application/folder.service";
import { UserService } from "src/modules/users/application/user.service";
import { PostOrmRepository } from "../infra/post/post.orm.repository";
import { PostFeedDTO } from "./dto/post-feed.output";
export declare class PostFeedService {
    private readonly postRepository;
    private readonly userService;
    private readonly folderService;
    constructor(postRepository: PostOrmRepository, userService: UserService, folderService: FolderService);
    findByUser(input: {
        userId: string;
        page?: number;
    }): Promise<PostFeedDTO>;
    findUnverified(input: {
        page?: number;
    }): Promise<PostFeedDTO>;
    findVerified(input: {
        page?: number;
    }): Promise<PostFeedDTO>;
}
