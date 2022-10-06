import {
  OrmMapper,
  OrmEntityProps,
} from "../../../common/database/orm-mapper.base";
import { DateVO } from "../../../common/domain/value-objects/date.vo";
import { User, UserProps } from "../../domain/users.entity";
import { UserOrm } from "./user.orm.entity";

export class UserOrmMapper extends OrmMapper<User, UserOrm> {
  constructor() {
    super(User, UserOrm);
  }
  protected toOrmProps(entity: User): OrmEntityProps<UserOrm> {
    const ormProps: OrmEntityProps<UserOrm> = {
      name: entity.getPropsCopy().name,
      description: entity.getPropsCopy().description,
      avatar: entity.getPropsCopy().avatar,
      birthday: entity.getPropsCopy().birthday.value.toISOString(),
    };

    return ormProps;
  }

  protected toDomainProps(ormEntity: UserOrm): UserProps {
    const props: UserProps = {
      name: ormEntity.name,
      description: ormEntity.description,
      avatar: ormEntity.avatar,
      birthday: new DateVO(ormEntity.birthday),
    };
    return props;
  }
}
