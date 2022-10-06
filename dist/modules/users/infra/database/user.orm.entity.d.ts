import { TypeormEntityBase } from "../../../common/database/typeorm.entity.base";
export declare class UserOrm extends TypeormEntityBase {
    name: string;
    description: string;
    birthday?: string;
    avatar: string;
}
