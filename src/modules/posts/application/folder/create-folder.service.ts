import { Injectable } from "@nestjs/common";
import { FolderFactory } from "../../domain/folder/folder.factory";
import { FolderOrmRepository } from "../../infra/database/folder/folder.orm.repository";
import { CreateFolderInput } from "./dto/folder.input";
import { FolderDTO } from "./dto/folder.output";

@Injectable()
export class CreateFolderService {
  constructor(private readonly folderRepository: FolderOrmRepository) {}

  async create(input: CreateFolderInput): Promise<FolderDTO> {
    const folderFactory = new FolderFactory(this.folderRepository);
    const folder = await folderFactory.create({
      ...input,
    });

    return new FolderDTO(folder);
  }
}
