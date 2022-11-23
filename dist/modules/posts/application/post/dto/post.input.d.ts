import { PostTags } from "../../../domain/post/posts.entity";
export declare class CreatePostInput {
    userId: string;
    title: string;
    markdown: string;
    tags: PostTags;
    folderId: string;
}
export declare class PostTagsInput implements PostTags {
    category: string;
}
export declare class UpdatePostInput extends CreatePostInput {
    id: string;
}
