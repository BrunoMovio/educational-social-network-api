import { Entity } from "../../common/domain/base-classes/entity.base";
import { ID } from "../../common/domain/value-objects/id";
export interface FolderProps {
    userId: ID;
    title: string;
    description: string;
}
export declare class Folder extends Entity<FolderProps> {
    get userId(): ID;
    get title(): string;
    get description(): string;
    updateFolder(props: Partial<FolderProps>): void;
}
