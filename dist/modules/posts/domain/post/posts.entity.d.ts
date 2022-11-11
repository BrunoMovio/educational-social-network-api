import { Entity } from "../../../common/domain/base-classes/entity.base";
import { ID } from "../../../common/domain/value-objects/id";
export interface PostProps {
    userId: ID;
    folderId: ID;
    name: string;
    markdown: string;
    tags: PostTags;
    likes: number;
}
export interface PostTags {
    category: string;
}
export declare class Post extends Entity<PostProps> {
    get userId(): ID;
    get folderId(): ID;
    get name(): string;
    get markdown(): string;
    get likes(): number;
    get tags(): PostTags;
    like(): void;
    deslike(): void;
    changeFolder(newFolderId: ID): void;
    updatePost(props: Partial<PostProps>): void;
}
