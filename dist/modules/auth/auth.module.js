"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthModule = void 0;
const common_1 = require("@nestjs/common");
const auth_service_1 = require("./application/auth.service");
const auth_guard_1 = require("./guards/auth.guard");
const api_key_strategy_1 = require("./passport/api-key.strategy");
const firebase_auth_strategy_1 = require("./passport/firebase-auth.strategy");
const auth_controller_1 = require("./presentation/auth.controller");
let AuthModule = class AuthModule {
};
AuthModule = __decorate([
    (0, common_1.Module)({
        imports: [],
        providers: [
            auth_service_1.UserAuthService,
            auth_guard_1.UserAuthGuard,
            firebase_auth_strategy_1.FirebaseAuthStrategy,
            api_key_strategy_1.ApiKeyStrategy,
        ],
        exports: [auth_service_1.UserAuthService],
        controllers: [auth_controller_1.UserAuthController],
    })
], AuthModule);
exports.AuthModule = AuthModule;
//# sourceMappingURL=auth.module.js.map