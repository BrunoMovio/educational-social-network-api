import { TypeormEntityBase } from "../../../../common/database/typeorm.entity.base";
export declare class FolderOrm extends TypeormEntityBase {
    userId: string;
    title: string;
    description: string;
}
