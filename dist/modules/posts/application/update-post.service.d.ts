import { UserService } from "../../../modules/users/application/user.service";
import { PostOrmRepository } from "../infra/post/post.orm.repository";
import { UpdatePostInput } from "./dto/post.input";
import { PostDTO } from "./dto/post.output";
import { FolderService } from "src/modules/folders/application/folder.service";
export declare class UpdatePostService {
    private readonly postRepository;
    private readonly userService;
    private readonly folderService;
    constructor(postRepository: PostOrmRepository, userService: UserService, folderService: FolderService);
    update(input: UpdatePostInput): Promise<PostDTO>;
    likePost(postId: string, userId: string): Promise<PostDTO>;
    deslikePost(postId: string, userId: string): Promise<PostDTO>;
    verifyPost(userId: string, postId: string): Promise<PostDTO>;
}
