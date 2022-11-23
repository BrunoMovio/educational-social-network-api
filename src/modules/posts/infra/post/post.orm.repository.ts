import { InjectRepository } from "@nestjs/typeorm";
import { Not, Repository } from "typeorm";
import { Injectable, Logger } from "@nestjs/common";

import { PostOrm } from "./post.orm.entity";
import { PostOrmMapper } from "./post.orm.mapper";
import { FindOperator, Raw } from "typeorm";
import {
  TypeormRepositoryBase,
  WhereCondition,
} from "../../../common/database/typeorm.repository.base";
import { Post, PostProps } from "../../domain/posts.entity";
import { QueryParams } from "../../../common/domain/ports/repository.ports";

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

  protected PAGE_SIZE: number = 10;

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

    return posts.map((post) => this.mapper.toDomainEntity(post));
  }

  async findManyByUserId(userId: string) {
    const posts = await this.postRepository.find({
      where: {
        userId,
      },
    });
    return posts.map((post) => this.mapper.toDomainEntity(post));
  }

  async findFeedByUserId(userId: string, page: number) {
    const posts = await this.postRepository.find({
      where: {
        userId: Not(userId),
      },
      take: this.PAGE_SIZE,
      skip: page * this.PAGE_SIZE,
    });

    return posts.map((post) => this.mapper.toDomainEntity(post));
  }

  async findUnverifiedPosts(page: number) {
    const posts = await this.postRepository.find({
      where: {
        verified: Not(true),
      },
      take: this.PAGE_SIZE,
      skip: page * this.PAGE_SIZE,
    });

    return posts.map((post) => this.mapper.toDomainEntity(post));
  }

  async findVerifiedPosts(page: number) {
    const posts = await this.postRepository.find({
      where: {
        verified: true,
      },
      take: this.PAGE_SIZE,
      skip: page * this.PAGE_SIZE,
    });

    return posts.map((post) => this.mapper.toDomainEntity(post));
  }

  async findManyByFolderId(folderId: string) {
    const posts = await this.postRepository.find({
      where: {
        folderId,
      },
    });
    return posts.map((post) => this.mapper.toDomainEntity(post));
  }

  async findOneByTitle(title: string) {
    const posts = await this.postRepository.find({
      where: {
        title,
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

    if (params.folderId) {
      where.folderId = params.folderId.value;
    }

    if (params.title) {
      where.title = params.title;
    }

    if (params.subtitle) {
      where.subtitle = params.subtitle;
    }

    if (params.tags) {
      where.tags = params.tags;
    }

    if (params.text) {
      where.text = params.text;
    }

    if (params.likes) {
      where.likes = params.likes;
    }

    if (params.verified) {
      where.verified = params.verified;
    }

    if (params.verifiedBy) {
      where.verifiedBy = params.verifiedBy;
    }

    return where;
  }
}
