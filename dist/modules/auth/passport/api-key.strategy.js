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
exports.ApiKeyStrategy = void 0;
const passport_headerapikey_1 = require("passport-headerapikey");
const passport_1 = require("@nestjs/passport");
const common_1 = require("@nestjs/common");
const auth_service_1 = require("../application/auth.service");
let ApiKeyStrategy = class ApiKeyStrategy extends (0, passport_1.PassportStrategy)(passport_headerapikey_1.HeaderAPIKeyStrategy, 'api-key') {
    constructor() {
        super({ header: 'x-api-key', prefix: '' }, true, (apiKey, done) => this.validate(apiKey, done));
    }
    validate(apiKey, done) {
        const checkKey = auth_service_1.UserAuthService.validateApiKey(apiKey);
        if (!checkKey) {
            return done(new common_1.UnauthorizedException(), null);
        }
        return done(null, true);
    }
};
ApiKeyStrategy = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], ApiKeyStrategy);
exports.ApiKeyStrategy = ApiKeyStrategy;
//# sourceMappingURL=api-key.strategy.js.map