import { User } from "../../domain/users.entity";
export declare class UserDTO {
    constructor(props: {
        user: User;
        firstFolderId?: string;
    });
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
