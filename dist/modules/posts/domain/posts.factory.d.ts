import { Post, PostTags } from "./posts.entity";
interface CreatePostInput {
    userId: string;
    folderId: string;
    title: string;
    subtitle: string;
    text: string;
    image?: string;
    tags: PostTags;
}
export declare class PostFactory {
    constructor();
    create(input: CreatePostInput): Post;
}
export {};
