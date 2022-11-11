import { Injectable, NotFoundException } from "@nestjs/common";
import { ID } from "../../../../modules/common/domain/value-objects/id";
import { PostOrmRepository } from "../../infra/database/post/post.orm.repository";
import { PostDTO } from "./dto/post.output";

@Injectable()
export class PostService {
  constructor(private readonly postRepository: PostOrmRepository) {}

  async findAll(): Promise<PostDTO[]> {
    const posts = await this.postRepository.findMany();
    return posts.map((post) => new PostDTO(post));
  }

  async findByCategory(category: string): Promise<PostDTO[]> {
    const posts = await this.postRepository.findManyByCategory(category);

    return posts.map((post) => new PostDTO(post));
  }

  async findByUserId(userId: string): Promise<PostDTO[]> {
    const posts = await this.postRepository.findManyByUserId(userId);

    return posts.map((post) => new PostDTO(post));
  }

  async findByFolderId(folderId: string): Promise<PostDTO[]> {
    const posts = await this.postRepository.findManyByFolderId(folderId);

    return posts.map((post) => new PostDTO(post));
  }

  async findPost(id: string): Promise<PostDTO> {
    try {
      const post = await this.postRepository.findOne({ id: new ID(id) });

      return new PostDTO(post);
    } catch (e) {
      throw new NotFoundException("Post not found with id: " + id);
    }
  }

  async findPostByName(name: string): Promise<PostDTO> {
    try {
      const post = await this.postRepository.findOneByName(name);

      return new PostDTO(post);
    } catch (e) {
      throw new NotFoundException("Post not found with name: " + name);
    }
  }
}
