import { UserOrmRepository } from "../infra/database/user.orm.repository";
import { UpdateUserInput } from "./dto/user.input";
import { UserDTO } from "./dto/user.output";
export declare class UpdateUserService {
    private readonly userRepository;
    constructor(userRepository: UserOrmRepository);
    update(input: UpdateUserInput): Promise<UserDTO>;
}
