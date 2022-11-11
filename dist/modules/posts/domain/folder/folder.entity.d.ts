import { Entity } from "../../../common/domain/base-classes/entity.base";
import { ID } from "../../../common/domain/value-objects/id";
export interface FolderProps {
    userId: ID;
    name: string;
}
export declare class Folder extends Entity<FolderProps> {
    get userId(): ID;
    get name(): string;
    updateFolder(props: Partial<FolderProps>): void;
}
