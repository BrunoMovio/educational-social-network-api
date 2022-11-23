"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FolderDTO = void 0;
class FolderDTO {
    constructor(folderProps, userProps) {
        this.id = folderProps.id.value;
        this.title = folderProps.title;
        this.description = folderProps.description;
        this.creationDate = folderProps.createdAt.value.toUTCString();
        this.lastUpdateDate = folderProps.updatedAt.value.toUTCString();
        this.nickname = userProps.nickname;
    }
}
exports.FolderDTO = FolderDTO;
//# sourceMappingURL=folder.output.js.map