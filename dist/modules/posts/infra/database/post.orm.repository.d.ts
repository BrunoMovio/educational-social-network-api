import { Repository } from "typeorm";
import { PostOrm } from "./post.orm.entity";
import { FindOperator } from "typeorm";
import { TypeormRepositoryBase, WhereCondition } from "../../../../modules/common/database/typeorm.repository.base";
import { Post, PostProps } from "../../domain/posts.entity";
import { QueryParams } from "../../../../modules/common/domain/ports/repository.ports";
export declare const Includes: <T extends string | number>(value: T) => FindOperator<T>;
export declare class PostOrmRepository extends TypeormRepositoryBase<Post, PostProps, PostOrm> {
    private readonly postRepository;
    protected relations: string[];
    protected PAGE_SIZE: number;
    constructor(postRepository: Repository<PostOrm>);
    findManyByCategory(tag: string): Promise<Post[]>;
    findManyByUserId(userId: string): Promise<Post[]>;
    findFeedByUserId(userId: string, page: number): Promise<Post[]>;
    findUnverifiedPosts(page: number): Promise<Post[]>;
    findVerifiedPosts(page: number): Promise<Post[]>;
    findManyByFolderId(folderId: string): Promise<Post[]>;
    findOneByTitle(title: string): Promise<Post>;
    protected prepareQuery(params: QueryParams<PostProps>): WhereCondition<PostOrm>;
}
