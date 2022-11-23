"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FolderDTO = void 0;
class FolderDTO {
    constructor(input) {
        this.id = input.folder.id.value;
        this.title = input.folder.title;
        this.description = input.folder.description;
        this.creationDate =
            input.folder.createdAt.value.toLocaleDateString("fr-CA");
        this.lastUpdateDate =
            input.folder.updatedAt.value.toLocaleDateString("fr-CA");
        this.nickname = input.user.nickname;
    }
}
exports.FolderDTO = FolderDTO;
//# sourceMappingURL=folder.output.js.map