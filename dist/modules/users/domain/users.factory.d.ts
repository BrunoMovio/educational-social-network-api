import { CreateUserInput } from "../application/dto/user.input";
import { UserOrmRepository } from "../infra/database/user.orm.repository";
import { User } from "./users.entity";
export declare class UserFactory {
    private userRepository;
    constructor(userRepository: UserOrmRepository);
    create(input: CreateUserInput): Promise<User>;
}
