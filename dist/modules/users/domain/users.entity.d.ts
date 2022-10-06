import { Entity } from "../../common/domain/base-classes/entity.base";
import { DateVO } from "../../common/domain/value-objects/date.vo";
export interface UserProps {
    name: string;
    birthday: DateVO;
    description: string;
    avatar?: string;
}
export declare class User extends Entity<UserProps> {
    get name(): string;
    get birthday(): DateVO;
    get description(): string;
    get avatar(): string;
    updateUser(props: UserProps): void;
}
