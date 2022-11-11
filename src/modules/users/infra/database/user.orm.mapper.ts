import {
  OrmMapper,
  OrmEntityProps,
} from "../../../common/database/orm-mapper.base";
import { User, UserProps, UserRoles } from "../../domain/users.entity";
import { UserOrm } from "./user.orm.entity";

export class UserOrmMapper extends OrmMapper<User, UserOrm> {
  constructor() {
    super(User, UserOrm);
  }
  protected toOrmProps(entity: User): OrmEntityProps<UserOrm> {
    const ormProps: OrmEntityProps<UserOrm> = {
      name: entity.getPropsCopy().name,
      email: entity.getPropsCopy().email,
      description: entity.getPropsCopy().description,
      nickname: entity.getPropsCopy().nickname,
      role: entity.getPropsCopy().role,
      city: entity.getPropsCopy().city,
      state: entity.getPropsCopy().state,
      country: entity.getPropsCopy().country,
      career: entity.getPropsCopy().career,
    };

    return ormProps;
  }

  protected toDomainProps(ormEntity: UserOrm): UserProps {
    const props: UserProps = {
      name: ormEntity.name,
      email: ormEntity.email,
      description: ormEntity.description,
      nickname: ormEntity.nickname,
      role: UserRoles[ormEntity.role],
      city: ormEntity.city,
      state: ormEntity.state,
      country: ormEntity.country,
      career: ormEntity.career,
    };
    return props;
  }
}
