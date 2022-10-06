import { Injectable } from "@nestjs/common";
import { ID } from "../../../modules/common/domain/value-objects/id";
import { PostOrmRepository } from "../infra/database/post.orm.repository";
import { Post, PostTags } from "./posts.entity";

interface CreatePostInput {
  userId: string;
  name: string;
  markdown: string;
  tags: PostTags;
}

@Injectable()
export class PostFactory {
  constructor(private postRepository: PostOrmRepository) {}

  async create(input: CreatePostInput) {
    const post = new Post({
      ...input,
      userId: new ID(input.userId),
      likes: 0,
    });

    return this.postRepository.save(post);
  }
}
