import { UserAuthService } from "../../auth/application/auth.service";
import { UserOrmRepository } from "../infra/database/user.orm.repository";
export declare class RemoveUserService {
    private readonly userReporsitory;
    private readonly userAuthService;
    constructor(userReporsitory: UserOrmRepository, userAuthService: UserAuthService);
    remove(email: string): Promise<string>;
}
