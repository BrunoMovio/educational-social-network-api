import { Injectable } from "@nestjs/common";
import { ID } from "../../../../modules/common/domain/value-objects/id";
import { FolderOrmRepository } from "../../infra/database/folder/folder.orm.repository";
import { UpdateFolderInput } from "./dto/folder.input";
import { FolderDTO } from "./dto/folder.output";

@Injectable()
export class UpdateFolderService {
  constructor(private readonly folderRepository: FolderOrmRepository) {}

  async update(input: UpdateFolderInput): Promise<FolderDTO> {
    const folder = await this.folderRepository.findOne({
      id: new ID(input.id),
    });

    folder.updateFolder({
      name: input.name,
    });

    const savedFolder = await this.folderRepository.save(folder);
    return new FolderDTO(savedFolder);
  }
}
