import { PostTags } from "../../../domain/post/posts.entity";

export class CreatePostInput {
  userId: string;
  name: string;
  markdown: string;
  tags: PostTags;
  folderId: string;
}

export class PostTagsInput implements PostTags {
  category: string;
}

export class UpdatePostInput extends CreatePostInput {
  id: string;
}
