import { Injectable } from "@nestjs/common";
import {
  OrmEntityProps,
  OrmMapper,
} from "../../../modules/common/database/orm-mapper.base";
import { DateVO } from "../../../modules/common/domain/value-objects/date.vo";
import { ID } from "../../../modules/common/domain/value-objects/id";
import { Folder, FolderProps } from "../domain/folder.entity";

import { FolderOrm } from "./folder.orm.entity";

@Injectable()
export class FolderOrmMapper extends OrmMapper<Folder, FolderOrm> {
  constructor() {
    super(Folder, FolderOrm);
  }
  protected toOrmProps(entity: Folder): OrmEntityProps<FolderOrm> {
    const ormProps: OrmEntityProps<FolderOrm> = {
      userId: entity.getPropsCopy().userId.value,
      title: entity.getPropsCopy().title,
      description: entity.getPropsCopy().description,
    };

    return ormProps;
  }

  protected toDomainProps(ormEntity: FolderOrm): FolderProps {
    const props: FolderProps = {
      userId: new ID(ormEntity.userId),
      title: ormEntity.title,
      description: ormEntity.description,
    };
    return props;
  }
}
