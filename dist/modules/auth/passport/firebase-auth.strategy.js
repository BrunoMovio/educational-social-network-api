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
exports.FirebaseAuthStrategy = void 0;
const auth_firebase_config_1 = require("../auth-firebase.config");
const passport_1 = require("@nestjs/passport");
const common_1 = require("@nestjs/common");
const passport_firebase_jwt_1 = require("passport-firebase-jwt");
let FirebaseAuthStrategy = class FirebaseAuthStrategy extends (0, passport_1.PassportStrategy)(passport_firebase_jwt_1.Strategy, 'firebase-auth') {
    constructor() {
        super({
            jwtFromRequest: passport_firebase_jwt_1.ExtractJwt.fromAuthHeaderAsBearerToken(),
        });
    }
    async validate(token) {
        const firebaseUser = await auth_firebase_config_1.firebaseApp
            .auth()
            .verifyIdToken(token, true)
            .catch((err) => {
            console.log(err);
            throw new common_1.UnauthorizedException(err.message);
        });
        if (!firebaseUser) {
            throw new common_1.UnauthorizedException();
        }
        return firebaseUser;
    }
};
FirebaseAuthStrategy = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], FirebaseAuthStrategy);
exports.FirebaseAuthStrategy = FirebaseAuthStrategy;
//# sourceMappingURL=firebase-auth.strategy.js.map