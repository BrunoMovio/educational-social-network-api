import { FolderDTO } from "src/modules/posts/application/folder/dto/folder.output";
import { User } from "../../domain/users.entity";
export declare class UserDTO {
    constructor(props: User, folder?: FolderDTO);
    id: string;
    name: string;
    email: string;
    nickname: string;
    role: string;
    city: string;
    state: string;
    country: string;
    description: string;
    career: string;
    folderId?: string;
}
