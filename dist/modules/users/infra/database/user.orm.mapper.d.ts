import { OrmMapper, OrmEntityProps } from "../../../common/database/orm-mapper.base";
import { User, UserProps } from "../../domain/users.entity";
import { UserOrm } from "./user.orm.entity";
export declare class UserOrmMapper extends OrmMapper<User, UserOrm> {
    constructor();
    protected toOrmProps(entity: User): OrmEntityProps<UserOrm>;
    protected toDomainProps(ormEntity: UserOrm): UserProps;
}
