import { CreateUserInput } from "../application/dto/user.input";
import { User } from "./users.entity";
export declare class UserFactory {
    constructor();
    create(input: CreateUserInput): Promise<User>;
}
