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
exports.UserOrmRepository = exports.Includes = void 0;
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const common_1 = require("@nestjs/common");
const typeorm_repository_base_1 = require("../../../common/database/typeorm.repository.base");
const user_orm_entity_1 = require("./user.orm.entity");
const user_orm_mapper_1 = require("./user.orm.mapper");
const typeorm_3 = require("typeorm");
const Includes = (value) => (0, typeorm_3.Raw)((columnAlias) => `:value = ANY(${columnAlias})`, { value });
exports.Includes = Includes;
let UserOrmRepository = class UserOrmRepository extends typeorm_repository_base_1.TypeormRepositoryBase {
    constructor(userRepository) {
        super(userRepository, new user_orm_mapper_1.UserOrmMapper(), new common_1.Logger("post-repository"));
        this.userRepository = userRepository;
        this.relations = [];
    }
    async findByName(name) {
        const users = await this.userRepository.find({
            where: {
                name,
            },
        });
        return users.map((user) => this.mapper.toDomainEntity(user));
    }
    async findByEmail(email) {
        const user = await this.userRepository.findOne({
            where: {
                email,
            },
        });
        return this.mapper.toDomainEntity(user);
    }
    async findByNickname(nickname) {
        const user = await this.userRepository.findOne({
            where: {
                nickname,
            },
        });
        return this.mapper.toDomainEntity(user);
    }
    prepareQuery(params) {
        const where = {};
        if (params.id) {
            where.id = params.id.value;
        }
        if (params.name) {
            where.name = params.name;
        }
        if (params.email) {
            where.email = params.email;
        }
        if (params.role) {
            where.role = params.role;
        }
        if (params.description) {
            where.description = params.description;
        }
        if (params.city) {
            where.city = params.city;
        }
        if (params.state) {
            where.state = params.state;
        }
        if (params.country) {
            where.country = params.country;
        }
        return where;
    }
};
UserOrmRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_orm_entity_1.UserOrm)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], UserOrmRepository);
exports.UserOrmRepository = UserOrmRepository;
//# sourceMappingURL=user.orm.repository.js.map