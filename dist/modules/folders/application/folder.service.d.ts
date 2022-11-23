import { UserService } from "../../../modules/users/application/user.service";
import { FolderOrmRepository } from "../infra/folder.orm.repository";
import { FolderDTO } from "./dto/folder.output";
export declare class FolderService {
    private readonly folderRepository;
    private readonly userService;
    constructor(folderRepository: FolderOrmRepository, userService: UserService);
    findAll(): Promise<FolderDTO[]>;
    findById(id: string): Promise<FolderDTO>;
    findByUserId(userId: string): Promise<FolderDTO[]>;
    findByName(name: string): Promise<FolderDTO>;
}
