import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Injectable, Logger } from "@nestjs/common";
import {
  TypeormRepositoryBase,
  WhereCondition,
} from "../../../common/database/typeorm.repository.base";
import { QueryParams } from "../../../common/domain/ports/repository.ports";
import { PostOrm } from "./post.orm.entity";
import { PostOrmMapper } from "./post.orm.mapper";
import { FindOperator, Raw } from "typeorm";
import { Post, PostProps } from "../../domain/posts.entity";

export const Includes = <T extends string | number>(
  value: T
): FindOperator<T> =>
  Raw((columnAlias) => `:value = ANY(${columnAlias})`, { value });

@Injectable()
export class PostOrmRepository extends TypeormRepositoryBase<
  Post,
  PostProps,
  PostOrm
> {
  protected relations: string[] = [];

  constructor(
    @InjectRepository(PostOrm)
    private readonly postRepository: Repository<PostOrm>
  ) {
    super(postRepository, new PostOrmMapper(), new Logger("post-repository"));
  }

  async findManyByCategory(tag: string) {
    const posts = await this.postRepository
      .createQueryBuilder()
      .select()
      .where(`tags->'category' @> '"${tag}"'`)
      .getMany();

    return posts.map((content) => this.mapper.toDomainEntity(content));
  }

  async findManyByUserId(userId: string) {
    const posts = await this.postRepository.find({
      where: {
        userId,
      },
    });
    return posts.map((content) => this.mapper.toDomainEntity(content));
  }

  async findOneByName(name: string) {
    const posts = await this.postRepository.find({
      where: {
        name,
      },
    });
    return this.mapper.toDomainEntity(posts[0]);
  }

  // Used to construct a query
  protected prepareQuery(
    params: QueryParams<PostProps>
  ): WhereCondition<PostOrm> {
    const where: QueryParams<PostOrm> = {};

    if (params.id) {
      where.id = params.id.value;
    }

    if (params.userId) {
      where.userId = params.userId.value;
    }

    if (params.name) {
      where.name = params.name;
    }

    if (params.tags) {
      where.tags = params.tags;
    }

    if (params.markdown) {
      where.markdown = params.markdown;
    }

    if (params.likes) {
      where.likes = params.likes;
    }

    return where;
  }
}
