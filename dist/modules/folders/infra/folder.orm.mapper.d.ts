import { OrmEntityProps, OrmMapper } from "../../../modules/common/database/orm-mapper.base";
import { Folder, FolderProps } from "../domain/folder.entity";
import { FolderOrm } from "./folder.orm.entity";
export declare class FolderOrmMapper extends OrmMapper<Folder, FolderOrm> {
    constructor();
    protected toOrmProps(entity: Folder): OrmEntityProps<FolderOrm>;
    protected toDomainProps(ormEntity: FolderOrm): FolderProps;
}
