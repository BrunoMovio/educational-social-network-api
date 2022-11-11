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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FolderController = void 0;
const common_1 = require("@nestjs/common");
const passport_1 = require("@nestjs/passport");
const folder_service_1 = require("../application/folder/folder.service");
const create_folder_service_1 = require("../application/folder/create-folder.service");
const folder_input_1 = require("../application/folder/dto/folder.input");
const remove_folder_service_1 = require("../application/folder/remove-folder.service");
const update_folder_service_1 = require("../application/folder/update-folder.service");
let FolderController = class FolderController {
    constructor(folderService, createFolderService, updateFolderService, removeFolderService) {
        this.folderService = folderService;
        this.createFolderService = createFolderService;
        this.updateFolderService = updateFolderService;
        this.removeFolderService = removeFolderService;
    }
    async createFolder(input) {
        try {
            const folder = await this.createFolderService.create(input);
            return folder;
        }
        catch (e) {
            throw new common_1.HttpException({
                status: common_1.HttpStatus.UNPROCESSABLE_ENTITY,
                error: `${e}`,
            }, common_1.HttpStatus.UNPROCESSABLE_ENTITY);
        }
    }
    async updateFolder(input) {
        try {
            const folder = await this.updateFolderService.update(input);
            return folder;
        }
        catch (e) {
            throw new common_1.HttpException({
                status: common_1.HttpStatus.NOT_MODIFIED,
                error: `${e}`,
            }, common_1.HttpStatus.NOT_MODIFIED);
        }
    }
    async removeFolder(id) {
        try {
            const folder = await this.removeFolderService.remove(id);
            return folder;
        }
        catch (e) {
            throw new common_1.HttpException({
                status: common_1.HttpStatus.NOT_FOUND,
                error: `${e}`,
            }, common_1.HttpStatus.NOT_FOUND);
        }
    }
    async getFolder(id) {
        try {
            const folder = await this.folderService.findFolder(id);
            return folder;
        }
        catch (e) {
            throw new common_1.HttpException({
                status: common_1.HttpStatus.NOT_FOUND,
                error: `${e}`,
            }, common_1.HttpStatus.NOT_FOUND);
        }
    }
    async getFolderByUserId(userId) {
        try {
            const folder = await this.folderService.findByUserId(userId);
            return folder;
        }
        catch (e) {
            throw new common_1.HttpException({
                status: common_1.HttpStatus.NOT_FOUND,
                error: `${e}`,
            }, common_1.HttpStatus.NOT_FOUND);
        }
    }
    async getFolderByName(name) {
        try {
            const folder = await this.folderService.findByName(name);
            return folder;
        }
        catch (e) {
            throw new common_1.HttpException({
                status: common_1.HttpStatus.NOT_FOUND,
                error: `${e}`,
            }, common_1.HttpStatus.NOT_FOUND);
        }
    }
};
__decorate([
    (0, common_1.Post)("create"),
    __param(0, (0, common_1.Body)("input")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [folder_input_1.CreateFolderInput]),
    __metadata("design:returntype", Promise)
], FolderController.prototype, "createFolder", null);
__decorate([
    (0, common_1.Post)("update"),
    __param(0, (0, common_1.Body)("input")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [folder_input_1.UpdateFolderInput]),
    __metadata("design:returntype", Promise)
], FolderController.prototype, "updateFolder", null);
__decorate([
    (0, common_1.Delete)("remove"),
    __param(0, (0, common_1.Body)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], FolderController.prototype, "removeFolder", null);
__decorate([
    (0, common_1.Get)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], FolderController.prototype, "getFolder", null);
__decorate([
    (0, common_1.Get)("user/:userId"),
    __param(0, (0, common_1.Param)("userId")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], FolderController.prototype, "getFolderByUserId", null);
__decorate([
    (0, common_1.Get)("name/:name"),
    __param(0, (0, common_1.Param)("name")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], FolderController.prototype, "getFolderByName", null);
FolderController = __decorate([
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)("api-key")),
    (0, common_1.Controller)("folder"),
    __metadata("design:paramtypes", [folder_service_1.FolderService,
        create_folder_service_1.CreateFolderService,
        update_folder_service_1.UpdateFolderService,
        remove_folder_service_1.RemoveFolderService])
], FolderController);
exports.FolderController = FolderController;
//# sourceMappingURL=folder.controler.js.map