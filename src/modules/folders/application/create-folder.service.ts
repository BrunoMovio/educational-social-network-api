import { Injectable } from "@nestjs/common";
import { UserService } from "../../../modules/users/application/user.service";
import { FolderFactory } from "../domain/folder.factory";
import { FolderOrmRepository } from "../infra/folder.orm.repository";
import { CreateFolderInput } from "./dto/folder.input";
import { FolderDTO } from "./dto/folder.output";

@Injectable()
export class CreateFolderService {
  constructor(
    private readonly folderRepository: FolderOrmRepository,
    private readonly userService: UserService
  ) {}

  async create(input: CreateFolderInput): Promise<FolderDTO> {
    const user = await this.userService.findById(input.userId);

    const folderFactory = new FolderFactory();
    const folder = await folderFactory.create({
      ...input,
    });
    const savedFolder = await this.folderRepository.save(folder);

    return new FolderDTO({ folder: savedFolder, user });
  }
}
