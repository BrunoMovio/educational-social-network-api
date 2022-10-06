import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Injectable, Logger } from "@nestjs/common";
import {
  TypeormRepositoryBase,
  WhereCondition,
} from "../../../common/database/typeorm.repository.base";
import { QueryParams } from "../../../common/domain/ports/repository.ports";
import { UserOrm } from "./user.orm.entity";
import { UserOrmMapper } from "./user.orm.mapper";
import { FindOperator, Raw } from "typeorm";
import { User, UserProps } from "../../domain/users.entity";

export const Includes = <T extends string | number>(
  value: T
): FindOperator<T> =>
  Raw((columnAlias) => `:value = ANY(${columnAlias})`, { value });

@Injectable()
export class UserOrmRepository extends TypeormRepositoryBase<
  User,
  UserProps,
  UserOrm
> {
  protected relations: string[] = [];

  constructor(
    @InjectRepository(UserOrm)
    private readonly userRepository: Repository<UserOrm>
  ) {
    super(userRepository, new UserOrmMapper(), new Logger("post-repository"));
  }

  async findByName(name: string) {
    const users = await this.userRepository.find({
      where: {
        name,
      },
    });
    return users.map((post) => this.mapper.toDomainEntity(post));
  }

  // Used to construct a query
  protected prepareQuery(
    params: QueryParams<UserProps>
  ): WhereCondition<UserOrm> {
    const where: QueryParams<UserOrm> = {};

    if (params.id) {
      where.id = params.id.value;
    }

    if (params.name) {
      where.name = params.name;
    }

    if (params.description) {
      where.description = params.description;
    }

    if (params.avatar) {
      where.avatar = params.avatar;
    }

    return where;
  }
}
