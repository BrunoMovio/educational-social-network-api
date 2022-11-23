import { FolderDTO } from "../../../../modules/folders/application/dto/folder.output";
import { UserDTO } from "../../../../modules/users/application/dto/user.output";
import { Post, PostTags } from "../../domain/posts.entity";

export class PostDTO {
  constructor(props: { post: Post; user: UserDTO; folder: FolderDTO }) {
    this.id = props.post.id.value;
    this.title = props.post.title;
    this.subtitle = props.post.subtitle;
    this.text = props.post.text;
    this.image = props.post.image;

    this.tags = props.post.tags;

    this.verified = props.post.verified;
    this.verifiedBy = props.post.verifiedBy;

    this.likes = props.post.likes;
    this.usersLiked = props.post.usersLiked.map((userLiked) => userLiked.value);

    this.userId = props.user.id;
    this.nickname = props.user.nickname;

    this.repositoryId = props.folder.id;
    this.repositoryTitle = props.folder.title;

    this.creationDate = props.post.createdAt.value.toLocaleDateString("fr-CA");
    this.lastUpdateDate =
      props.post.updatedAt.value.toLocaleDateString("fr-CA");
  }

  id: string;
  title: string;
  subtitle: string;
  text: string;
  image?: string;

  tags: PostTags;

  verified: boolean;
  verifiedBy?: string;

  likes: number;
  usersLiked: string[];

  userId: string;
  nickname: string;

  repositoryTitle: string;
  repositoryId: string;

  creationDate: string;
  lastUpdateDate: string;
}

export class PostTagDTO implements PostTags {
  category: string;
}
