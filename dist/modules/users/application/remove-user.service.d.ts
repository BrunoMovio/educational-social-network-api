import { UserOrmRepository } from "../infra/database/user.orm.repository";
export declare class RemoveUserService {
    private readonly userReporsitory;
    constructor(userReporsitory: UserOrmRepository);
    remove(id: string): Promise<string>;
}
