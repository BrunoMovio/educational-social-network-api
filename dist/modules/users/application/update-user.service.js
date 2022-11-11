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
exports.UpdateUserService = void 0;
const common_1 = require("@nestjs/common");
const id_1 = require("../../common/domain/value-objects/id");
const users_entity_1 = require("../domain/users.entity");
const user_orm_repository_1 = require("../infra/database/user.orm.repository");
const user_output_1 = require("./dto/user.output");
let UpdateUserService = class UpdateUserService {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async update(input) {
        const user = await this.userRepository.findOne({
            id: new id_1.ID(input.id),
        });
        user.updateUser({
            email: input.email || user.email,
            nickname: input.nickname || user.nickname,
            name: input.name || user.name,
            role: users_entity_1.UserRoles[input.role] || user.role,
            description: input.description,
            city: input.city,
            state: input.state,
            country: input.country,
            career: input.career,
        });
        const savedPost = await this.userRepository.save(user);
        return new user_output_1.UserDTO(savedPost);
    }
};
UpdateUserService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [user_orm_repository_1.UserOrmRepository])
], UpdateUserService);
exports.UpdateUserService = UpdateUserService;
//# sourceMappingURL=update-user.service.js.map