import { FolderOrmRepository } from "../../infra/database/folder/folder.orm.repository";
import { CreateFolderInput } from "./dto/folder.input";
import { FolderDTO } from "./dto/folder.output";
export declare class CreateFolderService {
    private readonly folderRepository;
    constructor(folderRepository: FolderOrmRepository);
    create(input: CreateFolderInput): Promise<FolderDTO>;
}
