import { PostDTO } from "./post.output";

export class PostFeedDTO {
  constructor(props: { postsToFeed: PostDTO[]; page: number }) {
    this.posts = props.postsToFeed;
    this.page = props.page;
  }

  posts: PostDTO[];
  page: number;
}
