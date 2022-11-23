import { Injectable } from "@nestjs/common";
import { ID } from "./../../../modules/common/domain/value-objects/id";
import { UserService } from "./../../../modules/users/application/user.service";
import { FolderOrmRepository } from "../infra/folder.orm.repository";
import { UpdateFolderInput } from "./dto/folder.input";
import { FolderDTO } from "./dto/folder.output";

@Injectable()
export class UpdateFolderService {
  constructor(
    private readonly folderRepository: FolderOrmRepository,
    private readonly userService: UserService
  ) {}

  async update(input: UpdateFolderInput): Promise<FolderDTO> {
    const folder = await this.folderRepository.findOne({
      id: new ID(input.id),
    });

    folder.updateFolder({
      title: input.title,
      description: input.description,
    });

    const savedFolder = await this.folderRepository.save(folder);
    const user = await this.userService.findById(folder.userId.value);

    return new FolderDTO({ folder: savedFolder, user });
  }
}
