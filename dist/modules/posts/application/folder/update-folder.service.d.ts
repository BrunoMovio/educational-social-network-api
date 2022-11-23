import { UserService } from "src/modules/users/application/user.service";
import { FolderOrmRepository } from "../../infra/database/folder/folder.orm.repository";
import { UpdateFolderInput } from "./dto/folder.input";
import { FolderDTO } from "./dto/folder.output";
export declare class UpdateFolderService {
    private readonly folderRepository;
    private readonly userService;
    constructor(folderRepository: FolderOrmRepository, userService: UserService);
    update(input: UpdateFolderInput): Promise<FolderDTO>;
}
