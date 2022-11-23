import { InjectRepository } from "@nestjs/typeorm";
import { Not, Repository } from "typeorm";
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
  protected PAGE_SIZE: number = 3;

  async findByName(name: string) {
    const users = await this.userRepository.find({
      where: {
        name,
      },
    });
    return users.map((user) => this.mapper.toDomainEntity(user));
  }

  async findByEmail(email: string) {
    const user = await this.userRepository.findOne({
      where: {
        email,
      },
    });
    return this.mapper.toDomainEntity(user);
  }

  async findByNickname(nickname: string) {
    const user = await this.userRepository.findOne({
      where: {
        nickname,
      },
    });
    return this.mapper.toDomainEntity(user);
  }

  async findFeedByUserId(userId: string, page: number) {
    const users = await this.userRepository.find({
      where: {
        userId: Not(userId),
      },
      take: this.PAGE_SIZE,
      skip: page * this.PAGE_SIZE,
    });

    return users.map((user) => this.mapper.toDomainEntity(user));
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

    if (params.email) {
      where.email = params.email;
    }

    if (params.role) {
      where.role = params.role;
    }

    if (params.description) {
      where.description = params.description;
    }

    if (params.city) {
      where.city = params.city;
    }

    if (params.state) {
      where.state = params.state;
    }

    if (params.country) {
      where.country = params.country;
    }

    return where;
  }
}
