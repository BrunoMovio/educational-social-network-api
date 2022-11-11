import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Injectable, Logger } from "@nestjs/common";
import {
  TypeormRepositoryBase,
  WhereCondition,
} from "../../../../common/database/typeorm.repository.base";
import { QueryParams } from "../../../../common/domain/ports/repository.ports";
import {
  Folder,
  FolderProps,
} from "../../../../../modules/posts/domain/folder/folder.entity";
import { FolderOrm } from "./folder.orm.entity";
import { FolderOrmMapper } from "./folder.orm.mapper";

@Injectable()
export class FolderOrmRepository extends TypeormRepositoryBase<
  Folder,
  FolderProps,
  FolderOrm
> {
  protected relations: string[] = [];

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

  async findOneByName(name: string) {
    const folder = await this.folderRepository.findOne({
      where: {
        name,
      },
    });
    return this.mapper.toDomainEntity(folder);
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

    if (params.name) {
      where.name = params.name;
    }

    return where;
  }
}
