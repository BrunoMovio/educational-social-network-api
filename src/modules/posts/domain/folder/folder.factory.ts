import { Injectable } from "@nestjs/common";
import { ID } from "../../../common/domain/value-objects/id";
import { FolderOrmRepository } from "../../infra/database/folder/folder.orm.repository";
import { Folder } from "./folder.entity";

interface CreateFolderInput {
  userId: string;
  name: string;
}

@Injectable()
export class FolderFactory {
  constructor(private folderRepository: FolderOrmRepository) {}

  async create(input: CreateFolderInput) {
    const folder = new Folder({
      ...input,
      userId: new ID(input.userId),
    });

    return this.folderRepository.save(folder);
  }
}
