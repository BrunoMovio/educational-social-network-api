import { FolderOrmRepository } from "../infra/folder.orm.repository";
export declare class RemoveFolderService {
    private readonly folderReporsitory;
    constructor(folderReporsitory: FolderOrmRepository);
    remove(id: string): Promise<string>;
}
