import { FolderService } from "src/modules/folders/application/folder.service";
import { UserService } from "src/modules/users/application/user.service";
import { PostOrmRepository } from "../infra/post/post.orm.repository";
import { CreatePostInput } from "./dto/post.input";
import { PostDTO } from "./dto/post.output";
export declare class CreatePostService {
    private readonly postRepository;
    private readonly userService;
    private readonly folderService;
    constructor(postRepository: PostOrmRepository, userService: UserService, folderService: FolderService);
    create(input: CreatePostInput): Promise<PostDTO>;
}
