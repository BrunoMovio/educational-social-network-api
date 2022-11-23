import { CreatePostService } from "../application/create-post.service";
import { CreatePostInput, UpdatePostInput } from "../application/dto/post.input";
import { PostFeedService } from "../application/post-feed.service";
import { PostService } from "../application/post.service";
import { RemovePostService } from "../application/remove-post.service";
import { UpdatePostService } from "../application/update-post.service";
export declare class PostController {
    private readonly postService;
    private readonly createPostService;
    private readonly updatePostService;
    private readonly removePostService;
    private readonly postFeedService;
    constructor(postService: PostService, createPostService: CreatePostService, updatePostService: UpdatePostService, removePostService: RemovePostService, postFeedService: PostFeedService);
    createPost(input: CreatePostInput): Promise<import("../application/dto/post.output").PostDTO>;
    updatePost(input: UpdatePostInput): Promise<import("../application/dto/post.output").PostDTO>;
    removePost(id: string): Promise<string>;
    getPost(id: string): Promise<import("../application/dto/post.output").PostDTO>;
    likePost(input: {
        postId: string;
        userId: string;
    }): Promise<import("../application/dto/post.output").PostDTO>;
    deslikePost(input: {
        postId: string;
        userId: string;
    }): Promise<import("../application/dto/post.output").PostDTO>;
    getPostByUserId(userId: string): Promise<import("../application/dto/post.output").PostDTO[]>;
    getPostByFolderId(folderId: string): Promise<import("../application/dto/post.output").PostDTO[]>;
    getContentCategory(category: string): Promise<import("../application/dto/post.output").PostDTO[]>;
    getFeed(userId: string, page: number): Promise<import("../application/dto/post-feed.output").PostFeedDTO>;
    getVerifiedFeed(page: number): Promise<import("../application/dto/post-feed.output").PostFeedDTO>;
    getUnverifiedFeed(page: number): Promise<import("../application/dto/post-feed.output").PostFeedDTO>;
    verifyPost(input: {
        userId: string;
        postId: string;
    }): Promise<import("../application/dto/post.output").PostDTO>;
}
