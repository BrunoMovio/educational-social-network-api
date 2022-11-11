import { PostOrmRepository } from "../../infra/database/post/post.orm.repository";
export declare class RemovePostService {
    private readonly postReporsitory;
    constructor(postReporsitory: PostOrmRepository);
    remove(id: string): Promise<string>;
}
