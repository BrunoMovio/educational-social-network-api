import { PostTags } from "../../domain/posts.entity";

export class CreatePostInput {
  userId: string;
  title: string;
  subtitle: string;
  text: string;
  image?: string;
  tags: PostTagsInput;
  folderId: string;
}

export class PostTagsInput implements PostTags {
  category: string;
  [tag: string]: string;
}

export class UpdatePostInput extends CreatePostInput {
  id: string;
}
