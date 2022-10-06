import { UserAuthService } from "../../auth/application/auth.service";
import { UserOrmRepository } from "../infra/database/user.orm.repository";
import { CreateUserInput } from "./dto/user.input";
import { UserDTO } from "./dto/user.output";
export declare class CreateUserService {
    private readonly userRepository;
    private readonly userAuthService;
    constructor(userRepository: UserOrmRepository, userAuthService: UserAuthService);
    create(input: CreateUserInput): Promise<UserDTO>;
}
