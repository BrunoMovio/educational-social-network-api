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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const user_orm_repository_1 = require("../infra/database/user.orm.repository");
const user_output_1 = require("./dto/user.output");
let UserService = class UserService {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async findAll() {
        const users = await this.userRepository.findMany();
        return users.map((user) => new user_output_1.UserDTO({ user }));
    }
    async findById(id) {
        try {
            const user = await this.userRepository.findOneByIdOrThrow(id);
            return new user_output_1.UserDTO({ user });
        }
        catch (e) {
            console.log(e);
            throw new common_1.NotFoundException("User not found with id: " + id);
        }
    }
    async findUsersByName(name) {
        try {
            const users = await this.userRepository.findByName(name);
            return users.map((user) => new user_output_1.UserDTO({ user }));
        }
        catch (e) {
            throw new common_1.NotFoundException("User not found with name: " + name);
        }
    }
    async findUsersByEmail(email) {
        try {
            const user = await this.userRepository.findByEmail(email);
            return new user_output_1.UserDTO({ user });
        }
        catch (e) {
            throw new common_1.NotFoundException("User not found with email: " + email);
        }
    }
    async findUsersByNickname(nickname) {
        try {
            const user = await this.userRepository.findByNickname(nickname);
            return new user_output_1.UserDTO({ user });
        }
        catch (e) {
            throw new common_1.NotFoundException("User not found with nickname: " + nickname);
        }
    }
};
UserService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [user_orm_repository_1.UserOrmRepository])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map