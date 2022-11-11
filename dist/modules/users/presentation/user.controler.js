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
exports.UserController = void 0;
const common_1 = require("@nestjs/common");
const passport_1 = require("@nestjs/passport");
const user_service_1 = require("../application/user.service");
const create_user_service_1 = require("../application/create-user.service");
const user_input_1 = require("../application/dto/user.input");
const remove_user_service_1 = require("../application/remove-user.service");
const update_user_service_1 = require("../application/update-user.service");
let UserController = class UserController {
    constructor(userService, createUserService, updateUserService, removeUserService) {
        this.userService = userService;
        this.createUserService = createUserService;
        this.updateUserService = updateUserService;
        this.removeUserService = removeUserService;
    }
    async createUser(input, res) {
        try {
            console.log("A", input);
            const user = await this.createUserService.create(input);
            res.status(200).send(user);
        }
        catch (e) {
            console.log(e);
            throw new common_1.HttpException({
                status: common_1.HttpStatus.UNPROCESSABLE_ENTITY,
                error: `${e}`,
            }, common_1.HttpStatus.UNPROCESSABLE_ENTITY);
        }
    }
    async updateUser(input) {
        try {
            const user = await this.updateUserService.update(input);
            return user;
        }
        catch (e) {
            throw new common_1.HttpException({
                status: common_1.HttpStatus.NOT_MODIFIED,
                error: `${e}`,
            }, common_1.HttpStatus.NOT_MODIFIED);
        }
    }
    async removeUser(email) {
        try {
            const user = await this.removeUserService.remove(email);
            return user;
        }
        catch (e) {
            throw new common_1.HttpException({
                status: common_1.HttpStatus.NOT_FOUND,
                error: `${e}`,
            }, common_1.HttpStatus.NOT_FOUND);
        }
    }
    async getUsersDByName(name) {
        try {
            const user = await this.userService.findUsersByName(name);
            return user;
        }
        catch (e) {
            throw new common_1.HttpException({
                status: common_1.HttpStatus.NOT_FOUND,
                error: `${e}`,
            }, common_1.HttpStatus.NOT_FOUND);
        }
    }
    async getUserByEmail(email) {
        try {
            const user = await this.userService.findUsersByEmail(email);
            return user;
        }
        catch (e) {
            throw new common_1.HttpException({
                status: common_1.HttpStatus.NOT_FOUND,
                error: `${e}`,
            }, common_1.HttpStatus.NOT_FOUND);
        }
    }
    async getUserByNickname(nickname) {
        try {
            const user = await this.userService.findUsersByNickname(nickname);
            return user;
        }
        catch (e) {
            throw new common_1.HttpException({
                status: common_1.HttpStatus.NOT_FOUND,
                error: `${e}`,
            }, common_1.HttpStatus.NOT_FOUND);
        }
    }
    async getUser(id) {
        try {
            const user = await this.userService.findById(id);
            return user;
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
    __param(1, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_input_1.CreateUserInput, Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "createUser", null);
__decorate([
    (0, common_1.Post)("update"),
    __param(0, (0, common_1.Body)("input")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_input_1.UpdateUserInput]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "updateUser", null);
__decorate([
    (0, common_1.Delete)("remove"),
    __param(0, (0, common_1.Body)("email")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "removeUser", null);
__decorate([
    (0, common_1.Get)("name/:name"),
    __param(0, (0, common_1.Param)("name")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getUsersDByName", null);
__decorate([
    (0, common_1.Get)("email/:email"),
    __param(0, (0, common_1.Param)("email")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getUserByEmail", null);
__decorate([
    (0, common_1.Get)("nickname/:nickname"),
    __param(0, (0, common_1.Param)("nickname")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getUserByNickname", null);
__decorate([
    (0, common_1.Get)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getUser", null);
UserController = __decorate([
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)("api-key")),
    (0, common_1.Controller)("user"),
    __metadata("design:paramtypes", [user_service_1.UserService,
        create_user_service_1.CreateUserService,
        update_user_service_1.UpdateUserService,
        remove_user_service_1.RemoveUserService])
], UserController);
exports.UserController = UserController;
//# sourceMappingURL=user.controler.js.map