import { UserService } from "src/modules/users/application/user.service";
import { FolderOrmRepository } from "../infra/folder.orm.repository";
import { FolderFeedDTO } from "./dto/folder-feed.output";
export declare class FolderFeedService {
    private readonly folderRepository;
    private readonly userService;
    constructor(folderRepository: FolderOrmRepository, userService: UserService);
    findByUser(input: {
        userId: string;
        page?: number;
    }): Promise<FolderFeedDTO>;
}
