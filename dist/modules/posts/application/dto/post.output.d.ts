import { Post, PostTags } from '../../domain/posts.entity';
export declare class PostDTO {
    constructor(props: Post);
    id: string;
    name: string;
    markdown: string;
    likes: number;
    tags: PostTags;
}
export declare class PostTagDTO implements PostTags {
    category: string;
}
