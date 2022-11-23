import { FolderService } from "src/modules/folders/application/folder.service";
import { UserService } from "src/modules/users/application/user.service";
import { PostOrmRepository } from "../infra/post/post.orm.repository";
import { PostDTO } from "./dto/post.output";
export declare class PostService {
    private readonly postRepository;
    private readonly userService;
    private readonly folderService;
    constructor(postRepository: PostOrmRepository, userService: UserService, folderService: FolderService);
    findAll(): Promise<PostDTO[]>;
    findByCategory(category: string): Promise<PostDTO[]>;
    findByUserId(userId: string): Promise<PostDTO[]>;
    findByFolderId(folderId: string): Promise<PostDTO[]>;
    findPost(id: string): Promise<PostDTO>;
    findPostByName(name: string): Promise<PostDTO>;
}
