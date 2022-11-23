import { InjectRepository } from "@nestjs/typeorm";
import { Not, Repository } from "typeorm";
import { Injectable, Logger } from "@nestjs/common";

import { FolderOrm } from "./folder.orm.entity";
import { FolderOrmMapper } from "./folder.orm.mapper";
import {
  TypeormRepositoryBase,
  WhereCondition,
} from "../../../modules/common/database/typeorm.repository.base";
import { QueryParams } from "../../../modules/common/domain/ports/repository.ports";
import { Folder, FolderProps } from "../domain/folder.entity";

@Injectable()
export class FolderOrmRepository extends TypeormRepositoryBase<
  Folder,
  FolderProps,
  FolderOrm
> {
  protected relations: string[] = [];
  protected PAGE_SIZE: number = 5;

  constructor(
    @InjectRepository(FolderOrm)
    private readonly folderRepository: Repository<FolderOrm>
  ) {
    super(
      folderRepository,
      new FolderOrmMapper(),
      new Logger("folder-repository")
    );
  }

  async findManyByUserId(userId: string) {
    const folders = await this.folderRepository.find({
      where: {
        userId,
      },
    });
    return folders.map((content) => this.mapper.toDomainEntity(content));
  }

  async findOneByTitle(title: string) {
    const folder = await this.folderRepository.findOne({
      where: {
        title,
      },
    });
    return this.mapper.toDomainEntity(folder);
  }

  async findFeedByUserId(userId: string, page: number) {
    const folders = await this.folderRepository.find({
      where: {
        userId: Not(userId),
      },
      take: this.PAGE_SIZE,
      skip: page * this.PAGE_SIZE,
    });

    return folders.map((post) => this.mapper.toDomainEntity(post));
  }

  // Used to construct a query
  protected prepareQuery(
    params: QueryParams<FolderProps>
  ): WhereCondition<FolderOrm> {
    const where: QueryParams<FolderOrm> = {};

    if (params.id) {
      where.id = params.id.value;
    }

    if (params.userId) {
      where.userId = params.userId.value;
    }

    if (params.title) {
      where.title = params.title;
    }

    if (params.description) {
      where.description = params.description;
    }

    if (params.createdAt) {
      where.createdAt = params.createdAt;
    }

    if (params.updatedAt) {
      where.updatedAt = params.updatedAt;
    }

    return where;
  }
}
