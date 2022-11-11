import { PostOrmRepository } from "../../infra/database/post/post.orm.repository";
import { Post, PostTags } from "./posts.entity";
interface CreatePostInput {
    userId: string;
    folderId: string;
    name: string;
    markdown: string;
    tags: PostTags;
}
export declare class PostFactory {
    private postRepository;
    constructor(postRepository: PostOrmRepository);
    create(input: CreatePostInput): Promise<Post>;
}
export {};
