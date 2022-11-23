import { Injectable, NotFoundException } from "@nestjs/common";
import { FolderService } from "../../../modules/folders/application/folder.service";
import { UserService } from "../../../modules/users/application/user.service";
import { PostOrmRepository } from "../infra/post/post.orm.repository";
import { PostFeedDTO } from "./dto/post-feed.output";
import { PostDTO } from "./dto/post.output";

@Injectable()
export class PostFeedService {
  constructor(
    private readonly postRepository: PostOrmRepository,
    private readonly userService: UserService,
    private readonly folderService: FolderService
  ) {}

  async findByUser(input: {
    userId: string;
    page?: number;
  }): Promise<PostFeedDTO> {
    const page = input.page ?? 0;
    const posts = await this.postRepository.findFeedByUserId(
      input.userId,
      page ?? 0
    );

    const postsToFeed = await Promise.all(
      posts.map(async (post) => {
        const user = await this.userService.findById(post.userId.value);
        if (!user) throw new NotFoundException("User not found");

        const folder = await this.folderService.findById(post.folderId.value);
        if (!folder) throw new NotFoundException("Folder not found");

        return new PostDTO({ post, user, folder });
      })
    );

    return new PostFeedDTO({ postsToFeed, page });
  }

  async findUnverified(input: { page?: number }): Promise<PostFeedDTO> {
    const page = input.page ?? 0;
    const posts = await this.postRepository.findUnverifiedPosts(page ?? 0);

    const postsToFeed = await Promise.all(
      posts.map(async (post) => {
        const user = await this.userService.findById(post.userId.value);
        if (!user) throw new NotFoundException("User not found");

        const folder = await this.folderService.findById(post.folderId.value);
        if (!folder) throw new NotFoundException("Folder not found");

        return new PostDTO({ post, user, folder });
      })
    );

    return new PostFeedDTO({ postsToFeed, page });
  }

  async findVerified(input: { page?: number }): Promise<PostFeedDTO> {
    const page = input.page ?? 0;
    const posts = await this.postRepository.findVerifiedPosts(page ?? 0);

    const postsToFeed = await Promise.all(
      posts.map(async (post) => {
        const user = await this.userService.findById(post.userId.value);
        if (!user) throw new NotFoundException("User not found");

        const folder = await this.folderService.findById(post.folderId.value);
        if (!folder) throw new NotFoundException("Folder not found");

        return new PostDTO({ post, user, folder });
      })
    );

    return new PostFeedDTO({ postsToFeed, page });
  }
}
