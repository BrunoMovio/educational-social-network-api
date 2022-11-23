"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FolderFeedService = void 0;
const common_1 = require("@nestjs/common");
const user_service_1 = require("../../users/application/user.service");
const folder_orm_repository_1 = require("../infra/folder.orm.repository");
const folder_feed_output_1 = require("./dto/folder-feed.output");
const folder_output_1 = require("./dto/folder.output");
let FolderFeedService = class FolderFeedService {
    constructor(folderRepository, userService) {
        this.folderRepository = folderRepository;
        this.userService = userService;
    }
    async findByUser(input) {
        var _a;
        const page = (_a = input.page) !== null && _a !== void 0 ? _a : 0;
        const folders = await this.folderRepository.findFeedByUserId(input.userId, page !== null && page !== void 0 ? page : 0);
        const foldersToFeed = await Promise.all(folders.map(async (folder) => {
            const user = await this.userService.findById(folder.userId.value);
            if (!user)
                throw new common_1.NotFoundException("User not found");
            return new folder_output_1.FolderDTO({ folder, user });
        }));
        return new folder_feed_output_1.FolderFeedDTO({ foldersToFeed, page });
    }
};
FolderFeedService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [folder_orm_repository_1.FolderOrmRepository,
        user_service_1.UserService])
], FolderFeedService);
exports.FolderFeedService = FolderFeedService;
//# sourceMappingURL=folder-feed.service.js.map