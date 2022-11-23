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
exports.UserFeedService = void 0;
const common_1 = require("@nestjs/common");
const user_orm_repository_1 = require("../infra/database/user.orm.repository");
const user_feed_output_1 = require("./dto/user-feed.output");
const user_output_1 = require("./dto/user.output");
let UserFeedService = class UserFeedService {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async findByUser(input) {
        var _a;
        const page = (_a = input.page) !== null && _a !== void 0 ? _a : 0;
        const users = await this.userRepository.findFeedByUserId(input.userId, page !== null && page !== void 0 ? page : 0);
        const usersToFeed = await Promise.all(users.map(async (user) => {
            return new user_output_1.UserDTO({ user });
        }));
        return new user_feed_output_1.UserFeedDTO({ usersToFeed, page });
    }
};
UserFeedService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [user_orm_repository_1.UserOrmRepository])
], UserFeedService);
exports.UserFeedService = UserFeedService;
//# sourceMappingURL=user-feed.service.js.map