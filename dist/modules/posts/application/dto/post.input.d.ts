import { PostTags } from "../../domain/posts.entity";
export declare class CreatePostInput {
    userId: string;
    title: string;
    subtitle: string;
    text: string;
    image?: string;
    tags: PostTagsInput;
    folderId: string;
}
export declare class PostTagsInput implements PostTags {
    category: string;
    [tag: string]: string;
}
export declare class UpdatePostInput extends CreatePostInput {
    id: string;
}
