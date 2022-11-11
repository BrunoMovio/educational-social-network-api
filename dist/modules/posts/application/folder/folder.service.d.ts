import { FolderOrmRepository } from "../../infra/database/folder/folder.orm.repository";
import { FolderDTO } from "./dto/folder.output";
export declare class FolderService {
    private readonly folderRepository;
    constructor(folderRepository: FolderOrmRepository);
    findAll(): Promise<FolderDTO[]>;
    findFolder(id: string): Promise<FolderDTO>;
    findByUserId(userId: string): Promise<FolderDTO[]>;
    findByName(name: string): Promise<FolderDTO>;
}
