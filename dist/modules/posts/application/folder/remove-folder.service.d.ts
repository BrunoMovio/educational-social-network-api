import { FolderOrmRepository } from "../../infra/database/folder/folder.orm.repository";
export declare class RemoveFolderService {
    private readonly folderReporsitory;
    constructor(folderReporsitory: FolderOrmRepository);
    remove(id: string): Promise<string>;
}
