import { Injectable, NotFoundException } from "@nestjs/common";
import { FolderService } from "../../../modules/folders/application/folder.service";
import { UserService } from "../../../modules/users/application/user.service";
import { PostFactory } from "../domain/posts.factory";
import { PostOrmRepository } from "../infra/post/post.orm.repository";
import { CreatePostInput } from "./dto/post.input";
import { PostDTO } from "./dto/post.output";

@Injectable()
export class CreatePostService {
  constructor(
    private readonly postRepository: PostOrmRepository,
    private readonly userService: UserService,
    private readonly folderService: FolderService
  ) {}

  async create(input: CreatePostInput): Promise<PostDTO> {
    const user = await this.userService.findById(input.userId);
    if (!user) throw new NotFoundException("User not found");

    const folder = await this.folderService.findById(input.folderId);
    if (!folder) throw new NotFoundException("Folder not found");

    const postFactory = new PostFactory();
    const post = await postFactory.create({
      ...input,
    });

    await this.postRepository.save(post);

    return new PostDTO({ post, user, folder });
  }
}
