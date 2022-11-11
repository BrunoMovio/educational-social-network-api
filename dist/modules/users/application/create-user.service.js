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
exports.CreateUserService = void 0;
const common_1 = require("@nestjs/common");
const create_folder_service_1 = require("../../../modules/posts/application/folder/create-folder.service");
const auth_service_1 = require("../../auth/application/auth.service");
const users_factory_1 = require("../domain/users.factory");
const user_orm_repository_1 = require("../infra/database/user.orm.repository");
const user_output_1 = require("./dto/user.output");
let CreateUserService = class CreateUserService {
    constructor(userRepository, userAuthService, createFolderService) {
        this.userRepository = userRepository;
        this.userAuthService = userAuthService;
        this.createFolderService = createFolderService;
    }
    async create(input) {
        let authUser;
        try {
            authUser = await this.userAuthService.registerUser({
                name: input.name,
                nickname: input.nickname,
                email: input.email,
                password: input.password,
            });
        }
        catch (e) {
            throw new Error("Cannot create firebase user: " + e);
        }
        try {
            const userFactory = new users_factory_1.UserFactory(this.userRepository);
            const user = await userFactory.create(Object.assign({}, input));
            const userFolder = await this.createFolderService.create({
                userId: user.id.value,
                name: "Primeira pasta",
            });
            console.log("B", userFolder);
            return new user_output_1.UserDTO(user, userFolder);
        }
        catch (e) {
            throw new Error("Cannot create database user: " + e);
        }
    }
};
CreateUserService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [user_orm_repository_1.UserOrmRepository,
        auth_service_1.UserAuthService,
        create_folder_service_1.CreateFolderService])
], CreateUserService);
exports.CreateUserService = CreateUserService;
//# sourceMappingURL=create-user.service.js.map