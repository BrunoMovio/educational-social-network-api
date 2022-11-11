import { Post, PostTags } from "../../../domain/post/posts.entity";

export class PostDTO {
  constructor(props: Post) {
    this.id = props.id.value;
    this.name = props.name;
    this.markdown = props.markdown;
    this.likes = props.likes;
    this.tags = props.tags;
    this.folderId = props.folderId.value;
    this.userId = props.userId.value;
  }

  id: string;
  name: string;
  markdown: string;
  likes: number;
  tags: PostTags;
  folderId: string;
  userId: string;
}

export class PostTagDTO implements PostTags {
  category: string;
}
