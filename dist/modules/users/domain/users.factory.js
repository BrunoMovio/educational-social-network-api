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
exports.UserFactory = void 0;
const common_1 = require("@nestjs/common");
const user_orm_repository_1 = require("../infra/database/user.orm.repository");
const users_entity_1 = require("./users.entity");
let UserFactory = class UserFactory {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async create(input) {
        const user = new users_entity_1.User(Object.assign(Object.assign({}, input), { description: input.description || "Descrição", role: users_entity_1.UserRoles[input.role] || users_entity_1.UserRoles.NORMAL, city: input.city || "São Paulo", state: input.state || "SP", country: input.country || "Brasil", career: input.country || "Brasil" }));
        return this.userRepository.save(user);
    }
};
UserFactory = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [user_orm_repository_1.UserOrmRepository])
], UserFactory);
exports.UserFactory = UserFactory;
//# sourceMappingURL=users.factory.js.map