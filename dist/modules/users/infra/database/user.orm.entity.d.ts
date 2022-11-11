import { TypeormEntityBase } from "../../../common/database/typeorm.entity.base";
export declare class UserOrm extends TypeormEntityBase {
    name: string;
    email: string;
    nickname: string;
    description: string;
    role: string;
    city: string;
    state: string;
    country: string;
    career: string;
}
