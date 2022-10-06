import { PostTags } from "../../domain/posts.entity";
export declare class CreatePostInput {
    userId: string;
    name: string;
    markdown: string;
    tags: PostTags;
}
export declare class PostTagsInput implements PostTags {
    category: string;
}
export declare class UpdatePostInput extends CreatePostInput {
    id: string;
}
