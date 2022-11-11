import { Repository } from "typeorm";
import { TypeormRepositoryBase, WhereCondition } from "../../../common/database/typeorm.repository.base";
import { QueryParams } from "../../../common/domain/ports/repository.ports";
import { UserOrm } from "./user.orm.entity";
import { FindOperator } from "typeorm";
import { User, UserProps } from "../../domain/users.entity";
export declare const Includes: <T extends string | number>(value: T) => FindOperator<T>;
export declare class UserOrmRepository extends TypeormRepositoryBase<User, UserProps, UserOrm> {
    private readonly userRepository;
    protected relations: string[];
    constructor(userRepository: Repository<UserOrm>);
    findByName(name: string): Promise<User[]>;
    findByEmail(email: string): Promise<User>;
    findByNickname(nickname: string): Promise<User>;
    protected prepareQuery(params: QueryParams<UserProps>): WhereCondition<UserOrm>;
}
