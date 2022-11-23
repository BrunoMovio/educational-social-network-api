import { TypeormEntityBase } from "../../../common/database/typeorm.entity.base";
import { PostTags } from "../../domain/posts.entity";
export declare class PostOrm extends TypeormEntityBase {
    userId: string;
    folderId: string;
    title: string;
    subtitle: string;
    image?: string;
    text: string;
    tags?: PostTags;
    likes: number;
    verified: boolean;
    verifiedBy?: string;
}
