import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  UseGuards,
} from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { PostService } from "../application/post.service";
import { CreatePostService } from "../application/create-post.service";
import {
  CreatePostInput,
  UpdatePostInput,
} from "../application/dto/post.input";
import { RemovePostService } from "../application/remove-post.service";
import { UpdatePostService } from "../application/update-post.service";

@UseGuards(AuthGuard("api-key"))
@Controller("post")
export class PostController {
  constructor(
    private readonly postService: PostService,
    private readonly createPostService: CreatePostService,
    private readonly updatePostService: UpdatePostService,
    private readonly removePostService: RemovePostService
  ) {}

  @Post("create")
  async createPost(@Body("input") input: CreatePostInput) {
    return this.createPostService.create(input);
  }

  @Post("update")
  async updatePost(@Body("input") input: UpdatePostInput) {
    return this.updatePostService.update(input);
  }

  @Delete("remove")
  async removePost(@Body("id") id: string) {
    return this.removePostService.remove(id);
  }

  @Get(":id")
  async getPost(@Param("id") id: string) {
    return this.postService.findPost(id);
  }

  @Post(":id/like")
  async likePost(@Param("id") id: string) {
    return this.updatePostService.likePost(id);
  }

  @Post(":id/deslike")
  async deslikePost(@Param("id") id: string) {
    return this.updatePostService.deslikePost(id);
  }

  @Get("user/:userId")
  async getPostByUserId(@Param("userId") userId: string) {
    return this.postService.findByUserId(userId);
  }

  @Get("index/:category")
  async getContentCategory(@Param("category") category: string) {
    return this.postService.findByCategory(category);
  }
}
