import { Injectable, NotFoundException } from "@nestjs/common";
import { UserService } from "../../../modules/users/application/user.service";
import { ID } from "../../../modules/common/domain/value-objects/id";
import { PostOrmRepository } from "../infra/post/post.orm.repository";
import { UpdatePostInput } from "./dto/post.input";
import { PostDTO } from "./dto/post.output";
import { FolderService } from "../../../modules/folders/application/folder.service";

@Injectable()
export class UpdatePostService {
  constructor(
    private readonly postRepository: PostOrmRepository,
    private readonly userService: UserService,
    private readonly folderService: FolderService
  ) {}

  async update(input: UpdatePostInput): Promise<PostDTO> {
    const oldPost = await this.postRepository.findOne({
      id: new ID(input.id),
    });

    oldPost.updatePost({
      userId: new ID(input.userId),
      title: input.title,
      subtitle: input.subtitle,
      tags: input.tags,
      text: input.text,
    });

    const post = await this.postRepository.save(oldPost);
    const user = await this.userService.findById(post.userId.value);
    if (!user) throw new NotFoundException("User not found");

    const folder = await this.folderService.findById(post.folderId.value);
    if (!folder) throw new NotFoundException("Folder not found");

    return new PostDTO({ post, user, folder });
  }

  async likePost(postId: string, userId: string): Promise<PostDTO> {
    const post = await this.postRepository.findOneByIdOrThrow(postId);
    post.like(new ID(userId));

    const user = await this.userService.findById(post.userId.value);
    if (!user) throw new NotFoundException("User not found");

    const folder = await this.folderService.findById(post.folderId.value);
    if (!folder) throw new NotFoundException("Folder not found");

    await this.postRepository.save(post);

    return new PostDTO({ post, user, folder });
  }

  async deslikePost(postId: string, userId: string): Promise<PostDTO> {
    const post = await this.postRepository.findOneByIdOrThrow(postId);
    post.deslike(new ID(userId));

    const user = await this.userService.findById(post.userId.value);
    if (!user) throw new NotFoundException("User not found");

    const folder = await this.folderService.findById(post.folderId.value);
    if (!folder) throw new NotFoundException("Folder not found");

    await this.postRepository.save(post);

    return new PostDTO({ post, user, folder });
  }

  async verifyPost(userId: string, postId: string): Promise<PostDTO> {
    const user = await this.userService.findById(userId);
    if (!user) throw new NotFoundException("User not found");

    const oldPost = await this.postRepository.findOneByIdOrThrow(postId);

    oldPost.verify(user.id, user.role, user.nickname);

    const post = await this.postRepository.save(oldPost);
    const folder = await this.folderService.findById(post.folderId.value);
    if (!folder) throw new NotFoundException("Folder not found");

    return new PostDTO({ post, user, folder });
  }
}
