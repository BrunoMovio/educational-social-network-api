import { PostOrmRepository } from "../infra/database/post.orm.repository";
import { PostDTO } from "./dto/post.output";
export declare class PostService {
    private readonly postRepository;
    constructor(postRepository: PostOrmRepository);
    findAll(): Promise<PostDTO[]>;
    findByCategory(category: string): Promise<PostDTO[]>;
    findByUserId(userId: string): Promise<PostDTO[]>;
    findPost(id: string): Promise<PostDTO>;
    findPostByName(name: string): Promise<PostDTO>;
}
