import { FolderDTO } from "src/modules/folders/application/dto/folder.output";
import { UserDTO } from "src/modules/users/application/dto/user.output";
import { Post, PostTags } from "../../domain/posts.entity";
export declare class PostDTO {
    constructor(props: {
        post: Post;
        user: UserDTO;
        folder: FolderDTO;
    });
    id: string;
    title: string;
    subtitle: string;
    text: string;
    image?: string;
    tags: PostTags;
    verified: boolean;
    verifiedBy?: string;
    likes: number;
    usersLiked: string[];
    userId: string;
    nickname: string;
    repositoryTitle: string;
    repositoryId: string;
    creationDate: string;
    lastUpdateDate: string;
}
export declare class PostTagDTO implements PostTags {
    category: string;
}
