import { Injectable } from "@nestjs/common";
import { PostFactory } from "../../domain/post/posts.factory";
import { PostOrmRepository } from "../../infra/database/post/post.orm.repository";
import { CreatePostInput } from "./dto/post.input";
import { PostDTO } from "./dto/post.output";

@Injectable()
export class CreatePostService {
  constructor(private readonly postRepository: PostOrmRepository) {}

  async create(input: CreatePostInput): Promise<PostDTO> {
    const postFactory = new PostFactory(this.postRepository);
    const post = await postFactory.create({
      ...input,
    });

    return new PostDTO(post);
  }
}
