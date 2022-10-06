import { PostOrmRepository } from "../infra/database/post.orm.repository";
import { UpdatePostInput } from "./dto/post.input";
import { PostDTO } from "./dto/post.output";
export declare class UpdatePostService {
    private readonly postRepository;
    constructor(postRepository: PostOrmRepository);
    update(input: UpdatePostInput): Promise<PostDTO>;
    likePost(id: string): Promise<PostDTO>;
    deslikePost(id: string): Promise<PostDTO>;
}
