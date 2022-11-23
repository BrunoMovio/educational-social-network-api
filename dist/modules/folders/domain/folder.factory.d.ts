import { Folder } from "./folder.entity";
interface CreateFolderInput {
    userId: string;
    title: string;
    description: string;
}
export declare class FolderFactory {
    constructor();
    create(input: CreateFolderInput): Promise<Folder>;
}
export {};
