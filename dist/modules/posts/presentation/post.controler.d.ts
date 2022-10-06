import { PostService } from "../application/post.service";
import { CreatePostService } from "../application/create-post.service";
import { CreatePostInput, UpdatePostInput } from "../application/dto/post.input";
import { RemovePostService } from "../application/remove-post.service";
import { UpdatePostService } from "../application/update-post.service";
export declare class PostController {
    private readonly postService;
    private readonly createPostService;
    private readonly updatePostService;
    private readonly removePostService;
    constructor(postService: PostService, createPostService: CreatePostService, updatePostService: UpdatePostService, removePostService: RemovePostService);
    createPost(input: CreatePostInput): Promise<import("../application/dto/post.output").PostDTO>;
    updatePost(input: UpdatePostInput): Promise<import("../application/dto/post.output").PostDTO>;
    removePost(id: string): Promise<string>;
    getPost(id: string): Promise<import("../application/dto/post.output").PostDTO>;
    likePost(id: string): Promise<import("../application/dto/post.output").PostDTO>;
    deslikePost(id: string): Promise<import("../application/dto/post.output").PostDTO>;
    getPostByUserId(userId: string): Promise<import("../application/dto/post.output").PostDTO[]>;
    getContentCategory(category: string): Promise<import("../application/dto/post.output").PostDTO[]>;
}
