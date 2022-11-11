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
exports.RemoveUserService = void 0;
const common_1 = require("@nestjs/common");
const auth_service_1 = require("../../auth/application/auth.service");
const user_orm_repository_1 = require("../infra/database/user.orm.repository");
let RemoveUserService = class RemoveUserService {
    constructor(userReporsitory, userAuthService) {
        this.userReporsitory = userReporsitory;
        this.userAuthService = userAuthService;
    }
    async remove(email) {
        const user = await this.userReporsitory.findByEmail(email);
        if (!user)
            throw new Error("User not found to bem deleted by email: " + email);
        await this.userAuthService.removeUserAuth(email);
        await this.userReporsitory.delete(user);
        return "Usuário deletado";
    }
};
RemoveUserService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [user_orm_repository_1.UserOrmRepository,
        auth_service_1.UserAuthService])
], RemoveUserService);
exports.RemoveUserService = RemoveUserService;
//# sourceMappingURL=remove-user.service.js.map