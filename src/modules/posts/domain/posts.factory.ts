import { Injectable } from "@nestjs/common";
import { ID } from "../../../modules/common/domain/value-objects/id";
import { PostOrmRepository } from "../infra/post/post.orm.repository";

import { Post, PostTags } from "./posts.entity";

interface CreatePostInput {
  userId: string;
  folderId: string;
  title: string;
  subtitle: string;
  text: string;
  image?: string;
  tags: PostTags;
}

@Injectable()
export class PostFactory {
  constructor() {}

  create(input: CreatePostInput) {
    const post = new Post({
      ...input,
      userId: new ID(input.userId),
      folderId: new ID(input.folderId),
      likes: 0,
      usersLiked: [],
      verified: false,
    });

    return post;
  }
}
