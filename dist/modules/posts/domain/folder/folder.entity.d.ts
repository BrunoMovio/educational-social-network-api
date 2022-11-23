import { DateVO } from "src/modules/common/domain/value-objects/date.vo";
import { Entity } from "../../../common/domain/base-classes/entity.base";
import { ID } from "../../../common/domain/value-objects/id";
export interface FolderProps {
    userId: ID;
    title: string;
    description: string;
    createdAt?: DateVO;
    updatedAt?: DateVO;
}
export declare class Folder extends Entity<FolderProps> {
    get userId(): ID;
    get title(): string;
    get description(): string;
    get createdAt(): DateVO;
    get updatedAt(): DateVO;
    updateFolder(props: Partial<FolderProps>): void;
}
