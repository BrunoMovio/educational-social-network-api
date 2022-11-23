import { Injectable, NotFoundException } from "@nestjs/common";
import { UserService } from "../../../modules/users/application/user.service";
import { FolderOrmRepository } from "../infra/folder.orm.repository";
import { FolderFeedDTO } from "./dto/folder-feed.output";
import { FolderDTO } from "./dto/folder.output";

@Injectable()
export class FolderFeedService {
  constructor(
    private readonly folderRepository: FolderOrmRepository,
    private readonly userService: UserService
  ) {}

  async findByUser(input: {
    userId: string;
    page?: number;
  }): Promise<FolderFeedDTO> {
    const page = input.page ?? 0;
    const folders = await this.folderRepository.findFeedByUserId(
      input.userId,
      page ?? 0
    );

    const foldersToFeed = await Promise.all(
      folders.map(async (folder) => {
        const user = await this.userService.findById(folder.userId.value);
        if (!user) throw new NotFoundException("User not found");

        return new FolderDTO({ folder, user });
      })
    );

    return new FolderFeedDTO({ foldersToFeed, page });
  }
}
