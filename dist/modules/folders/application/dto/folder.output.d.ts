import { UserDTO } from "../../../../modules/users/application/dto/user.output";
import { Folder } from "../../domain/folder.entity";
export declare class FolderDTO {
    constructor(input: {
        folder: Folder;
        user: UserDTO;
    });
    id: string;
    title: string;
    description: string;
    nickname: string;
    creationDate: string;
    lastUpdateDate: string;
}
