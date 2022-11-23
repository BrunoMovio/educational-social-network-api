import { Repository } from "typeorm";
import { FolderOrm } from "./folder.orm.entity";
import { TypeormRepositoryBase, WhereCondition } from "../../../modules/common/database/typeorm.repository.base";
import { QueryParams } from "../../../modules/common/domain/ports/repository.ports";
import { Folder, FolderProps } from "../domain/folder.entity";
export declare class FolderOrmRepository extends TypeormRepositoryBase<Folder, FolderProps, FolderOrm> {
    private readonly folderRepository;
    protected relations: string[];
    protected PAGE_SIZE: number;
    constructor(folderRepository: Repository<FolderOrm>);
    findManyByUserId(userId: string): Promise<Folder[]>;
    findOneByTitle(title: string): Promise<Folder>;
    findFeedByUserId(userId: string, page: number): Promise<Folder[]>;
    protected prepareQuery(params: QueryParams<FolderProps>): WhereCondition<FolderOrm>;
}
