import { PostService } from "../application/post/post.service";
import { CreatePostService } from "../application/post/create-post.service";
import { CreatePostInput, UpdatePostInput } from "../application/post/dto/post.input";
import { RemovePostService } from "../application/post/remove-post.service";
import { UpdatePostService } from "../application/post/update-post.service";
export declare class PostController {
    private readonly postService;
    private readonly createPostService;
    private readonly updatePostService;
    private readonly removePostService;
    constructor(postService: PostService, createPostService: CreatePostService, updatePostService: UpdatePostService, removePostService: RemovePostService);
    createPost(input: CreatePostInput): Promise<import("../application/post/dto/post.output").PostDTO>;
    updatePost(input: UpdatePostInput): Promise<import("../application/post/dto/post.output").PostDTO>;
    removePost(id: string): Promise<string>;
    getPost(id: string): Promise<import("../application/post/dto/post.output").PostDTO>;
    likePost(id: string): Promise<import("../application/post/dto/post.output").PostDTO>;
    deslikePost(id: string): Promise<import("../application/post/dto/post.output").PostDTO>;
    getPostByUserId(userId: string): Promise<import("../application/post/dto/post.output").PostDTO[]>;
    getPostByFolderId(folderId: string): Promise<import("../application/post/dto/post.output").PostDTO[]>;
    getContentCategory(category: string): Promise<import("../application/post/dto/post.output").PostDTO[]>;
}
