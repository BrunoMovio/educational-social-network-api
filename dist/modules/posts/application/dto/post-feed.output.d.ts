import { PostDTO } from "./post.output";
export declare class PostFeedDTO {
    constructor(props: {
        postsToFeed: PostDTO[];
        page: number;
    });
    posts: PostDTO[];
    page: number;
}
