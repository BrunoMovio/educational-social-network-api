import { TypeormEntityBase } from "../../../../common/database/typeorm.entity.base";
import { PostTags } from "../../../domain/post/posts.entity";
export declare class PostOrm extends TypeormEntityBase {
    userId: string;
    folderId: string;
    name: string;
    markdown: string;
    tags?: PostTags;
    likes: number;
}
