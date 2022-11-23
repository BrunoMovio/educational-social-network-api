import { Injectable, NotFoundException } from "@nestjs/common";
import { UserService } from "../../../modules/users/application/user.service";
import { ID } from "../../../modules/common/domain/value-objects/id";
import { FolderOrmRepository } from "../infra/folder.orm.repository";
import { FolderDTO } from "./dto/folder.output";

@Injectable()
export class FolderService {
  constructor(
    private readonly folderRepository: FolderOrmRepository,
    private readonly userService: UserService
  ) {}

  async findAll(): Promise<FolderDTO[]> {
    const folders = await this.folderRepository.findMany();
    return Promise.all(
      folders.map(async (folder) => {
        const user = await this.userService.findById(folder.userId.value);
        return new FolderDTO({ folder, user });
      })
    );
  }

  async findById(id: string): Promise<FolderDTO> {
    try {
      const folder = await this.folderRepository.findOne({ id: new ID(id) });

      const user = await this.userService.findById(folder.userId.value);
      return new FolderDTO({ folder, user });
    } catch (e) {
      throw new NotFoundException("Folder not found with id: " + id);
    }
  }

  async findByUserId(userId: string): Promise<FolderDTO[]> {
    const folders = await this.folderRepository.findManyByUserId(userId);

    return Promise.all(
      folders.map(async (folder) => {
        const user = await this.userService.findById(folder.userId.value);
        return new FolderDTO({ folder, user });
      })
    );
  }

  async findByName(name: string): Promise<FolderDTO> {
    try {
      const folder = await this.folderRepository.findOneByTitle(name);

      const user = await this.userService.findById(folder.userId.value);
      return new FolderDTO({ folder, user });
    } catch (e) {
      throw new NotFoundException("Folder not found with name: " + name);
    }
  }
}
