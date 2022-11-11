import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Post,
  UseGuards,
} from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { PostService } from "../application/post/post.service";
import { CreatePostService } from "../application/post/create-post.service";
import {
  CreatePostInput,
  UpdatePostInput,
} from "../application/post/dto/post.input";
import { RemovePostService } from "../application/post/remove-post.service";
import { UpdatePostService } from "../application/post/update-post.service";

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
    try {
      const post = await this.createPostService.create(input);
      return post;
    } catch (e: any) {
      throw new HttpException(
        {
          status: HttpStatus.UNPROCESSABLE_ENTITY,
          error: `${e}`,
        },
        HttpStatus.UNPROCESSABLE_ENTITY
      );
    }
  }

  @Post("update")
  async updatePost(@Body("input") input: UpdatePostInput) {
    try {
      const post = await this.updatePostService.update(input);
      return post;
    } catch (e: any) {
      throw new HttpException(
        {
          status: HttpStatus.NOT_MODIFIED,
          error: `${e}`,
        },
        HttpStatus.NOT_MODIFIED
      );
    }
  }

  @Delete("remove")
  async removePost(@Body("id") id: string) {
    try {
      const post = await this.removePostService.remove(id);
      return post;
    } catch (e: any) {
      throw new HttpException(
        {
          status: HttpStatus.NOT_FOUND,
          error: `${e}`,
        },
        HttpStatus.NOT_FOUND
      );
    }
  }

  @Get(":id")
  async getPost(@Param("id") id: string) {
    try {
      const post = await this.postService.findPost(id);
      return post;
    } catch (e: any) {
      throw new HttpException(
        {
          status: HttpStatus.NOT_FOUND,
          error: `${e}`,
        },
        HttpStatus.NOT_FOUND
      );
    }
  }

  @Post(":id/like")
  async likePost(@Param("id") id: string) {
    try {
      const post = await this.updatePostService.likePost(id);
      return post;
    } catch (e: any) {
      throw new HttpException(
        {
          status: HttpStatus.NOT_MODIFIED,
          error: `${e}`,
        },
        HttpStatus.NOT_FOUND
      );
    }
  }

  @Post(":id/deslike")
  async deslikePost(@Param("id") id: string) {
    try {
      const post = await this.updatePostService.deslikePost(id);
      return post;
    } catch (e: any) {
      throw new HttpException(
        {
          status: HttpStatus.NOT_MODIFIED,
          error: `${e}`,
        },
        HttpStatus.NOT_FOUND
      );
    }
  }

  @Get("user/:userId")
  async getPostByUserId(@Param("userId") userId: string) {
    try {
      const post = await this.postService.findByUserId(userId);
      return post;
    } catch (e: any) {
      throw new HttpException(
        {
          status: HttpStatus.NOT_FOUND,
          error: `${e}`,
        },
        HttpStatus.NOT_FOUND
      );
    }
  }

  @Get("folder/:folderId")
  async getPostByFolderId(@Param("folderId") folderId: string) {
    try {
      const post = await this.postService.findByFolderId(folderId);
      return post;
    } catch (e: any) {
      throw new HttpException(
        {
          status: HttpStatus.NOT_FOUND,
          error: `${e}`,
        },
        HttpStatus.NOT_FOUND
      );
    }
  }

  @Get("index/:category")
  async getContentCategory(@Param("category") category: string) {
    try {
      const posts = await this.postService.findByCategory(category);
      return posts;
    } catch (e: any) {
      console.log(e);
      throw new HttpException(
        {
          status: HttpStatus.NOT_FOUND,
          error: `${e}`,
        },
        HttpStatus.NOT_FOUND
      );
    }
  }
}
