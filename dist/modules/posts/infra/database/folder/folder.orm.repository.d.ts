import { Repository } from "typeorm";
import { TypeormRepositoryBase, WhereCondition } from "../../../../common/database/typeorm.repository.base";
import { QueryParams } from "../../../../common/domain/ports/repository.ports";
import { Folder, FolderProps } from "../../../../../modules/posts/domain/folder/folder.entity";
import { FolderOrm } from "./folder.orm.entity";
export declare class FolderOrmRepository extends TypeormRepositoryBase<Folder, FolderProps, FolderOrm> {
    private readonly folderRepository;
    protected relations: string[];
    constructor(folderRepository: Repository<FolderOrm>);
    findManyByUserId(userId: string): Promise<Folder[]>;
    findOneByName(name: string): Promise<Folder>;
    protected prepareQuery(params: QueryParams<FolderProps>): WhereCondition<FolderOrm>;
}
