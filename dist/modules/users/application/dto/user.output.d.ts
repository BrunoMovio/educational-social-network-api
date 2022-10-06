import { User } from "../../domain/users.entity";
export declare class UserDTO {
    constructor(props: User);
    id: string;
    name: string;
    description: string;
    birthday: string;
    avatar: string;
}
