import { PostTags } from "../../domain/posts.entity";

export class CreatePostInput {
  userId: string;
  name: string;
  markdown: string;
  tags: PostTags;
}

export class PostTagsInput implements PostTags {
  category: string;
}

export class UpdatePostInput extends CreatePostInput {
  id: string;
}
