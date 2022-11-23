import { FolderDTO } from "./folder.output";
export declare class FolderFeedDTO {
    constructor(props: {
        foldersToFeed: FolderDTO[];
        page: number;
    });
    folders: FolderDTO[];
    page: number;
}
