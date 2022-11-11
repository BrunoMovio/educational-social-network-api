import { Injectable } from "@nestjs/common";
import { ID } from "../../../../modules/common/domain/value-objects/id";
import { FolderOrmRepository } from "../../infra/database/folder/folder.orm.repository";

@Injectable()
export class RemoveFolderService {
  constructor(private readonly folderReporsitory: FolderOrmRepository) {}

  async remove(id: string): Promise<string> {
    const folder = await this.folderReporsitory.findOneByIdOrThrow(new ID(id));

    await this.folderReporsitory.delete(folder);
    return "Folder deleted";
  }
}
