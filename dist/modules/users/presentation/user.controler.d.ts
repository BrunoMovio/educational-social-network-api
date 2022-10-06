import { UserService } from "../application/user.service";
import { CreateUserService } from "../application/create-user.service";
import { CreateUserInput, UpdateUserInput } from "../application/dto/user.input";
import { RemoveUserService } from "../application/remove-user.service";
import { UpdateUserService } from "../application/update-user.service";
export declare class UserController {
    private readonly userService;
    private readonly createUserService;
    private readonly updateUserService;
    private readonly removeUserService;
    constructor(userService: UserService, createUserService: CreateUserService, updateUserService: UpdateUserService, removeUserService: RemoveUserService);
    createUser(input: CreateUserInput): Promise<import("../application/dto/user.output").UserDTO>;
    updateUser(input: UpdateUserInput): Promise<import("../application/dto/user.output").UserDTO>;
    removeUser(id: string): Promise<string>;
    getUserByName(name: string): Promise<import("../application/dto/user.output").UserDTO[]>;
    getUser(id: string): Promise<import("../application/dto/user.output").UserDTO>;
}
