import { FolderOrmRepository } from "../../infra/database/folder/folder.orm.repository";
import { UpdateFolderInput } from "./dto/folder.input";
import { FolderDTO } from "./dto/folder.output";
export declare class UpdateFolderService {
    private readonly folderRepository;
    constructor(folderRepository: FolderOrmRepository);
    update(input: UpdateFolderInput): Promise<FolderDTO>;
}
