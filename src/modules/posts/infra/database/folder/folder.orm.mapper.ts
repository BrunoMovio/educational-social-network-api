import { Injectable } from "@nestjs/common";
import {
  OrmEntityProps,
  OrmMapper,
} from "../../../../../modules/common/database/orm-mapper.base";
import { ID } from "../../../../../modules/common/domain/value-objects/id";
import {
  Folder,
  FolderProps,
} from "../../../../../modules/posts/domain/folder/folder.entity";
import { FolderOrm } from "./folder.orm.entity";

@Injectable()
export class FolderOrmMapper extends OrmMapper<Folder, FolderOrm> {
  constructor() {
    super(Folder, FolderOrm);
  }
  protected toOrmProps(entity: Folder): OrmEntityProps<FolderOrm> {
    const ormProps: OrmEntityProps<FolderOrm> = {
      userId: entity.getPropsCopy().userId.value,
      name: entity.getPropsCopy().name,
    };

    return ormProps;
  }

  protected toDomainProps(ormEntity: FolderOrm): FolderProps {
    const props: FolderProps = {
      userId: new ID(ormEntity.userId),
      name: ormEntity.name,
    };
    return props;
  }
}
