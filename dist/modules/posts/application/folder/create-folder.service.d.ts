import { UserService } from "src/modules/users/application/user.service";
import { FolderOrmRepository } from "../../infra/database/folder/folder.orm.repository";
import { CreateFolderInput } from "./dto/folder.input";
import { FolderDTO } from "./dto/folder.output";
export declare class CreateFolderService {
    private readonly folderRepository;
    private readonly userService;
    constructor(folderRepository: FolderOrmRepository, userService: UserService);
    create(input: CreateFolderInput): Promise<FolderDTO>;
}
