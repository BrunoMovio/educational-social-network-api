"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const user_service_1 = require("./application/user.service");
const create_user_service_1 = require("./application/create-user.service");
const remove_user_service_1 = require("./application/remove-user.service");
const update_user_service_1 = require("./application/update-user.service");
const users_factory_1 = require("./domain/users.factory");
const user_orm_entity_1 = require("./infra/database/user.orm.entity");
const user_orm_mapper_1 = require("./infra/database/user.orm.mapper");
const user_orm_repository_1 = require("./infra/database/user.orm.repository");
const user_controler_1 = require("./presentation/user.controler");
const auth_module_1 = require("../auth/auth.module");
const post_module_1 = require("../posts/post.module");
let UserModule = class UserModule {
};
UserModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([user_orm_entity_1.UserOrm]), auth_module_1.AuthModule, post_module_1.PostModule],
        providers: [
            user_orm_repository_1.UserOrmRepository,
            users_factory_1.UserFactory,
            user_service_1.UserService,
            create_user_service_1.CreateUserService,
            update_user_service_1.UpdateUserService,
            remove_user_service_1.RemoveUserService,
            user_orm_mapper_1.UserOrmMapper,
        ],
        controllers: [user_controler_1.UserController],
        exports: [user_service_1.UserService],
    })
], UserModule);
exports.UserModule = UserModule;
//# sourceMappingURL=user.module.js.map