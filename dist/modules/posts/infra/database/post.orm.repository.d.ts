import { Repository } from "typeorm";
import { TypeormRepositoryBase, WhereCondition } from "../../../common/database/typeorm.repository.base";
import { QueryParams } from "../../../common/domain/ports/repository.ports";
import { PostOrm } from "./post.orm.entity";
import { FindOperator } from "typeorm";
import { Post, PostProps } from "../../domain/posts.entity";
export declare const Includes: <T extends string | number>(value: T) => FindOperator<T>;
export declare class PostOrmRepository extends TypeormRepositoryBase<Post, PostProps, PostOrm> {
    private readonly postRepository;
    protected relations: string[];
    constructor(postRepository: Repository<PostOrm>);
    findManyByCategory(tag: string): Promise<Post[]>;
    findManyByUserId(userId: string): Promise<Post[]>;
    findOneByName(name: string): Promise<Post>;
    protected prepareQuery(params: QueryParams<PostProps>): WhereCondition<PostOrm>;
}
