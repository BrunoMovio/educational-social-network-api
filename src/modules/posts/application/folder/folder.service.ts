import { Injectable, NotFoundException } from "@nestjs/common";
import { ID } from "../../../../modules/common/domain/value-objects/id";
import { FolderOrmRepository } from "../../infra/database/folder/folder.orm.repository";
import { FolderDTO } from "./dto/folder.output";

@Injectable()
export class FolderService {
  constructor(private readonly folderRepository: FolderOrmRepository) {}

  async findAll(): Promise<FolderDTO[]> {
    const folders = await this.folderRepository.findMany();
    return folders.map((folder) => new FolderDTO(folder));
  }

  async findFolder(id: string): Promise<FolderDTO> {
    try {
      const post = await this.folderRepository.findOne({ id: new ID(id) });

      return new FolderDTO(post);
    } catch (e) {
      throw new NotFoundException("Folder not found with id: " + id);
    }
  }

  async findByUserId(userId: string): Promise<FolderDTO[]> {
    const folders = await this.folderRepository.findManyByUserId(userId);

    return folders.map((folder) => new FolderDTO(folder));
  }

  async findByName(name: string): Promise<FolderDTO> {
    try {
      const folder = await this.folderRepository.findOneByName(name);

      return new FolderDTO(folder);
    } catch (e) {
      throw new NotFoundException("Folder not found with name: " + name);
    }
  }
}
