import { FolderOrmRepository } from "../../infra/database/folder/folder.orm.repository";
import { Folder } from "./folder.entity";
interface CreateFolderInput {
    userId: string;
    title: string;
    description: string;
}
export declare class FolderFactory {
    private folderRepository;
    constructor(folderRepository: FolderOrmRepository);
    create(input: CreateFolderInput): Promise<Folder>;
}
export {};
