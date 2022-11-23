import { Injectable, NotFoundException } from "@nestjs/common";
import { FolderService } from "../../../modules/folders/application/folder.service";
import { UserService } from "../../../modules/users/application/user.service";
import { ID } from "../../../modules/common/domain/value-objects/id";
import { PostOrmRepository } from "../infra/post/post.orm.repository";
import { PostDTO } from "./dto/post.output";

@Injectable()
export class PostService {
  constructor(
    private readonly postRepository: PostOrmRepository,
    private readonly userService: UserService,
    private readonly folderService: FolderService
  ) {}

  async findAll(): Promise<PostDTO[]> {
    try {
      const posts = await this.postRepository.findMany();
      return Promise.all(
        posts.map(async (post) => {
          const user = await this.userService.findById(post.userId.value);
          if (!user) throw new NotFoundException("User not found");

          const folder = await this.folderService.findById(post.folderId.value);
          if (!folder) throw new NotFoundException("Folder not found");

          return new PostDTO({ post, user, folder });
        })
      );
    } catch (e) {
      throw new NotFoundException("Posts not found");
    }
  }

  async findByCategory(category: string): Promise<PostDTO[]> {
    try {
      const posts = await this.postRepository.findManyByCategory(category);

      return Promise.all(
        posts.map(async (post) => {
          const user = await this.userService.findById(post.userId.value);
          if (!user) throw new NotFoundException("User not found");

          const folder = await this.folderService.findById(post.folderId.value);
          if (!folder) throw new NotFoundException("Folder not found");

          return new PostDTO({ post, user, folder });
        })
      );
    } catch (e) {
      throw new NotFoundException("Posts not found with category: " + category);
    }
  }

  async findByUserId(userId: string): Promise<PostDTO[]> {
    try {
      const posts = await this.postRepository.findManyByUserId(userId);

      return Promise.all(
        posts.map(async (post) => {
          const user = await this.userService.findById(post.userId.value);
          if (!user) throw new NotFoundException("User not found");

          const folder = await this.folderService.findById(post.folderId.value);
          if (!folder) throw new NotFoundException("Folder not found");

          return new PostDTO({ post, user, folder });
        })
      );
    } catch (e) {
      throw new NotFoundException("Post not found with userId: " + userId);
    }
  }

  async findByFolderId(folderId: string): Promise<PostDTO[]> {
    try {
      const posts = await this.postRepository.findManyByFolderId(folderId);

      return Promise.all(
        posts.map(async (post) => {
          const user = await this.userService.findById(post.userId.value);
          if (!user) throw new NotFoundException("User not found");

          const folder = await this.folderService.findById(post.folderId.value);
          if (!folder) throw new NotFoundException("Folder not found");

          return new PostDTO({ post, user, folder });
        })
      );
    } catch (e) {
      throw new NotFoundException("Post not found with folderId: " + folderId);
    }
  }

  async findPost(id: string): Promise<PostDTO> {
    try {
      const post = await this.postRepository.findOne({ id: new ID(id) });

      const user = await this.userService.findById(post.userId.value);
      if (!user) throw new NotFoundException("User not found");

      const folder = await this.folderService.findById(post.folderId.value);
      if (!folder) throw new NotFoundException("Folder not found");

      return new PostDTO({ post, user, folder });
    } catch (e) {
      throw new NotFoundException("Post not found with id: " + id);
    }
  }

  async findPostByName(name: string): Promise<PostDTO> {
    try {
      const post = await this.postRepository.findOneByTitle(name);

      const user = await this.userService.findById(post.userId.value);
      if (!user) throw new NotFoundException("User not found");

      const folder = await this.folderService.findById(post.folderId.value);
      if (!folder) throw new NotFoundException("Folder not found");

      return new PostDTO({ post, user, folder });
    } catch (e) {
      throw new NotFoundException("Post not found with name: " + name);
    }
  }
}
