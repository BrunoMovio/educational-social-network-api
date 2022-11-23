import { UnauthorizedException } from "@nestjs/common";
import { Entity } from "../../common/domain/base-classes/entity.base";
import { ID } from "../../common/domain/value-objects/id";

export interface PostProps {
  userId: ID;
  folderId: ID;
  title: string;
  subtitle: string;
  text: string;
  image?: string;
  tags: PostTags;
  likes: number;
  usersLiked: ID[];
  verified: boolean;
  verifiedBy?: string;
}

export interface PostTags {
  category: string;
}

export class Post extends Entity<PostProps> {
  get userId(): ID {
    return this.props.userId;
  }

  get folderId(): ID {
    return this.props.folderId;
  }

  get title(): string {
    return this.props.title;
  }

  get subtitle(): string {
    return this.props.subtitle;
  }

  get text(): string {
    return this.props.text;
  }

  get image(): string {
    return this.props.image;
  }

  get likes(): number {
    return this.props.likes;
  }

  get usersLiked(): ID[] {
    return this.props.usersLiked;
  }

  get tags(): PostTags {
    return this.props.tags;
  }

  get verified(): boolean {
    return this.props.verified;
  }

  get verifiedBy(): string {
    return this.props.verifiedBy;
  }

  like(userId: ID) {
    const alreadyLiked = this.usersLiked.includes(userId);

    if (alreadyLiked) throw new Error("User already liked this post");

    this.props.usersLiked.push(userId);
    this.props.likes++;
  }

  deslike(userId: ID) {
    const alreadyLiked = this.usersLiked.includes(userId);

    if (!alreadyLiked) throw new Error("User did not liked this post");

    this.props.usersLiked = this.props.usersLiked.filter(
      (userLiked) => userLiked !== userId
    );

    this.props.likes--;
  }

  changeFolder(newFolderId: ID) {
    this.props.folderId = newFolderId;
  }

  verify(userId: string, userRole: string, userNickname: string) {
    if (userRole !== "ADMIN")
      throw new UnauthorizedException("Only admin users could verify posts");

    if (userId === this.userId.value)
      throw new UnauthorizedException(
        "Only other admins could verify your posts"
      );

    this.props.verified = true;
    this.props.verifiedBy = userNickname;
  }

  updatePost(props: Partial<PostProps>) {
    if (props.title) this.props.title = props.title;
    if (props.subtitle) this.props.subtitle = props.subtitle;
    if (props.text) this.props.subtitle = props.text;
    if (props.image) this.props.subtitle = props.image;
    if (props.likes) this.props.likes = props.likes;
    if (props.tags) this.props.tags = props.tags;
  }
}
