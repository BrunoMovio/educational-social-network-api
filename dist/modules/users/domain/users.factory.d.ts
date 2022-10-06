import { DateVO } from "../../common/domain/value-objects/date.vo";
import { UserOrmRepository } from "../infra/database/user.orm.repository";
import { User } from "./users.entity";
interface CreateUserInput {
    name: string;
    description: string;
    birthday: DateVO;
    avatar?: string;
}
export declare class UserFactory {
    private userRepository;
    constructor(userRepository: UserOrmRepository);
    create(input: CreateUserInput): Promise<User>;
}
export {};
