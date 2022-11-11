import { Post, PostTags } from "../../../domain/post/posts.entity";
export declare class PostDTO {
    constructor(props: Post);
    id: string;
    name: string;
    markdown: string;
    likes: number;
    tags: PostTags;
    folderId: string;
    userId: string;
}
export declare class PostTagDTO implements PostTags {
    category: string;
}
