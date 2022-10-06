import { TypeormEntityBase } from "../../../common/database/typeorm.entity.base";
import { PostTags } from "../../domain/posts.entity";
export declare class PostOrm extends TypeormEntityBase {
    userId: string;
    name: string;
    markdown: string;
    tags?: PostTags;
    likes: number;
}
