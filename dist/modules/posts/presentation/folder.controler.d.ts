import { FolderService } from "../application/folder/folder.service";
import { CreateFolderService } from "../application/folder/create-folder.service";
import { CreateFolderInput, UpdateFolderInput } from "../application/folder/dto/folder.input";
import { RemoveFolderService } from "../application/folder/remove-folder.service";
import { UpdateFolderService } from "../application/folder/update-folder.service";
export declare class FolderController {
    private readonly folderService;
    private readonly createFolderService;
    private readonly updateFolderService;
    private readonly removeFolderService;
    constructor(folderService: FolderService, createFolderService: CreateFolderService, updateFolderService: UpdateFolderService, removeFolderService: RemoveFolderService);
    createFolder(input: CreateFolderInput): Promise<import("../application/folder/dto/folder.output").FolderDTO>;
    updateFolder(input: UpdateFolderInput): Promise<import("../application/folder/dto/folder.output").FolderDTO>;
    removeFolder(id: string): Promise<string>;
    getFolder(id: string): Promise<import("../application/folder/dto/folder.output").FolderDTO>;
    getFolderByUserId(userId: string): Promise<import("../application/folder/dto/folder.output").FolderDTO[]>;
    getFolderByName(name: string): Promise<import("../application/folder/dto/folder.output").FolderDTO>;
}
