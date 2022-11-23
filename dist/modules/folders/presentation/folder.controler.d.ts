import { FolderService } from "../application/folder.service";
import { CreateFolderService } from "../application/create-folder.service";
import { CreateFolderInput, UpdateFolderInput } from "../application/dto/folder.input";
import { RemoveFolderService } from "../application/remove-folder.service";
import { UpdateFolderService } from "../application/update-folder.service";
import { FolderFeedService } from "../application/folder-feed.service";
export declare class FolderController {
    private readonly folderService;
    private readonly folderFeedService;
    private readonly createFolderService;
    private readonly updateFolderService;
    private readonly removeFolderService;
    constructor(folderService: FolderService, folderFeedService: FolderFeedService, createFolderService: CreateFolderService, updateFolderService: UpdateFolderService, removeFolderService: RemoveFolderService);
    createFolder(input: CreateFolderInput): Promise<import("../application/dto/folder.output").FolderDTO>;
    updateFolder(input: UpdateFolderInput): Promise<import("../application/dto/folder.output").FolderDTO>;
    removeFolder(id: string): Promise<string>;
    getFolder(id: string): Promise<import("../application/dto/folder.output").FolderDTO>;
    getFolderByUserId(userId: string): Promise<import("../application/dto/folder.output").FolderDTO[]>;
    getFolderByName(name: string): Promise<import("../application/dto/folder.output").FolderDTO>;
    getFeed(userId: string, page: number): Promise<import("../application/dto/folder-feed.output").FolderFeedDTO>;
}
