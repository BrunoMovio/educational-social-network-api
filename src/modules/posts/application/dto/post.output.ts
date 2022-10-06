import { Post, PostTags } from '../../domain/posts.entity';

export class PostDTO {
  constructor(props: Post) {
    this.id = props.id.value;
    this.name = props.name;
    this.markdown = props.markdown;
    this.likes = props.likes;
    this.tags = props.tags;
  }

  id: string;
  name: string;
  markdown: string;
  likes: number;
  tags: PostTags;
}

export class PostTagDTO implements PostTags {
  category: string;
}
