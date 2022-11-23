import { UserDTO } from "src/modules/users/application/dto/user.output";
import { Folder } from "../../../../../modules/posts/domain/folder/folder.entity";
export declare class FolderDTO {
    constructor(folderProps: Folder, userProps: UserDTO);
    id: string;
    title: string;
    description: string;
    nickname: string;
    creationDate: string;
    lastUpdateDate: string;
}
