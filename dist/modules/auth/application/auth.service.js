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
exports.UserAuthService = void 0;
const common_1 = require("@nestjs/common");
const admin = require("firebase-admin");
const auth_firebase_config_1 = require("../auth-firebase.config");
let UserAuthService = class UserAuthService {
    constructor() { }
    async registerUser(userInfo) {
        const auth = admin.auth(auth_firebase_config_1.firebaseApp);
        let userRecord;
        try {
            userRecord = await auth.createUser({
                email: userInfo.email,
                password: userInfo.password,
                displayName: userInfo.name,
            });
        }
        catch (e) {
            throw new Error(e.errorInfo.message);
        }
        await auth.setCustomUserClaims(userRecord.uid, {
            nickname: userInfo.nickname,
            role: "ADMIN",
            isFirstLogin: true,
        });
        return userRecord;
    }
    async resetPassword(email) {
        const auth = admin.auth(auth_firebase_config_1.firebaseApp);
        const firebaseUser = await auth.getUserByEmail(email);
        if (!firebaseUser)
            throw new Error("User not found");
        const randomPassword = "123456";
        await auth.updateUser(firebaseUser.uid, { password: randomPassword });
        await auth.setCustomUserClaims(firebaseUser.uid, {
            labenumero: firebaseUser.customClaims.nickname,
            isFirstLogin: true,
        });
        return firebaseUser;
    }
    async userMadeFirstLogin(email) {
        const auth = admin.auth(auth_firebase_config_1.firebaseApp);
        const firebaseUser = await auth.getUserByEmail(email);
        await auth.setCustomUserClaims(firebaseUser.uid, {
            nickname: firebaseUser.customClaims.nickname,
            isFirstLogin: false,
        });
    }
    async updateNickname(input) {
        const auth = admin.auth(auth_firebase_config_1.firebaseApp);
        const firebaseUser = await auth.getUserByEmail(input.email);
        await auth.setCustomUserClaims(firebaseUser.uid, {
            nickname: input.nickname,
            isFirstLogin: firebaseUser.customClaims.isFirstLogin,
        });
        return firebaseUser.customClaims;
    }
    async getUserAuthDetails(email) {
        const auth = admin.auth(auth_firebase_config_1.firebaseApp);
        const firebaseUser = await auth.getUserByEmail(email);
        return firebaseUser.customClaims || "Without custom claims";
    }
    async removeUserAuth(email) {
        const auth = admin.auth(auth_firebase_config_1.firebaseApp);
        const firebaseUser = await auth.getUserByEmail(email);
        return auth.deleteUser(firebaseUser.uid);
    }
    static validateApiKey(apiKey) {
        const key = process.env.API_KEY;
        return apiKey === key;
    }
};
UserAuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], UserAuthService);
exports.UserAuthService = UserAuthService;
//# sourceMappingURL=auth.service.js.map