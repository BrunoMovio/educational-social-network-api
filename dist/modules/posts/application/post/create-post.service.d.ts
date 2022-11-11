import { PostOrmRepository } from "../../infra/database/post/post.orm.repository";
import { CreatePostInput } from "./dto/post.input";
import { PostDTO } from "./dto/post.output";
export declare class CreatePostService {
    private readonly postRepository;
    constructor(postRepository: PostOrmRepository);
    create(input: CreatePostInput): Promise<PostDTO>;
}
