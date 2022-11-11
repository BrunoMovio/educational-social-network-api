import { UserService } from "../application/user.service";
import { CreateUserService } from "../application/create-user.service";
import { CreateUserInput, UpdateUserInput } from "../application/dto/user.input";
import { RemoveUserService } from "../application/remove-user.service";
import { UpdateUserService } from "../application/update-user.service";
import { Response } from "express";
export declare class UserController {
    private readonly userService;
    private readonly createUserService;
    private readonly updateUserService;
    private readonly removeUserService;
    constructor(userService: UserService, createUserService: CreateUserService, updateUserService: UpdateUserService, removeUserService: RemoveUserService);
    createUser(input: CreateUserInput, res: Response): Promise<void>;
    updateUser(input: UpdateUserInput): Promise<import("../application/dto/user.output").UserDTO>;
    removeUser(email: string): Promise<string>;
    getUsersDByName(name: string): Promise<import("../application/dto/user.output").UserDTO[]>;
    getUserByEmail(email: string): Promise<import("../application/dto/user.output").UserDTO>;
    getUserByNickname(nickname: string): Promise<import("../application/dto/user.output").UserDTO>;
    getUser(id: string): Promise<import("../application/dto/user.output").UserDTO>;
}
