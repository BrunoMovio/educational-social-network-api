import { UserOrmRepository } from "../infra/database/user.orm.repository";
import { UserDTO } from "./dto/user.output";
export declare class UserService {
    private readonly userRepository;
    constructor(userRepository: UserOrmRepository);
    findAll(): Promise<UserDTO[]>;
    findById(id: string): Promise<UserDTO>;
    findUsersByName(name: string): Promise<UserDTO[]>;
}
