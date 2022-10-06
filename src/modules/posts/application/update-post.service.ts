import { Injectable } from "@nestjs/common";
import { ID } from "../../../modules/common/domain/value-objects/id";
import { PostOrmRepository } from "../infra/database/post.orm.repository";
import { UpdatePostInput } from "./dto/post.input";
import { PostDTO } from "./dto/post.output";

@Injectable()
export class UpdatePostService {
  constructor(private readonly postRepository: PostOrmRepository) {}

  async update(input: UpdatePostInput): Promise<PostDTO> {
    const post = await this.postRepository.findOne({
      id: new ID(input.id),
    });

    post.updatePost({
      userId: new ID(input.userId),
      name: input.name,
      tags: input.tags,
      markdown: input.markdown,
      likes: post.likes,
    });

    const savedPost = await this.postRepository.save(post);
    return new PostDTO(savedPost);
  }

  async likePost(id: string): Promise<PostDTO> {
    const post = await this.postRepository.findOneByIdOrThrow(id);

    post.like();

    const savedPost = await this.postRepository.save(post);
    return new PostDTO(savedPost);
  }

  async deslikePost(id: string): Promise<PostDTO> {
    const post = await this.postRepository.findOneByIdOrThrow(id);

    post.deslike();

    const savedPost = await this.postRepository.save(post);
    return new PostDTO(savedPost);
  }
}
