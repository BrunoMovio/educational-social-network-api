import { CreateFolderService } from "../../../modules/folders/application/create-folder.service";
import { UserAuthService } from "../../auth/application/auth.service";
import { UserOrmRepository } from "../infra/database/user.orm.repository";
import { CreateUserInput } from "./dto/user.input";
import { UserDTO } from "./dto/user.output";
export declare class CreateUserService {
    private readonly userRepository;
    private readonly userAuthService;
    private readonly createFolderService;
    constructor(userRepository: UserOrmRepository, userAuthService: UserAuthService, createFolderService: CreateFolderService);
    create(input: CreateUserInput): Promise<UserDTO>;
}
