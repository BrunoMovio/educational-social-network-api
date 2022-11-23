import { Entity } from "../../common/domain/base-classes/entity.base";
import { ID } from "../../common/domain/value-objects/id";
export interface PostProps {
    userId: ID;
    folderId: ID;
    title: string;
    subtitle: string;
    text: string;
    image?: string;
    tags: PostTags;
    likes: number;
    usersLiked: ID[];
    verified: boolean;
    verifiedBy?: string;
}
export interface PostTags {
    category: string;
}
export declare class Post extends Entity<PostProps> {
    get userId(): ID;
    get folderId(): ID;
    get title(): string;
    get subtitle(): string;
    get text(): string;
    get image(): string;
    get likes(): number;
    get usersLiked(): ID[];
    get tags(): PostTags;
    get verified(): boolean;
    get verifiedBy(): string;
    like(userId: ID): void;
    deslike(userId: ID): void;
    changeFolder(newFolderId: ID): void;
    verify(userId: string, userRole: string, userNickname: string): void;
    updatePost(props: Partial<PostProps>): void;
}
