import { UserAuthService } from "../application/auth.service";
export declare class UserAuthController {
    private readonly firebaseAuthService;
    constructor(firebaseAuthService: UserAuthService);
    register(userInfo: {
        name: string;
        email: string;
        nickname: string;
        password: string;
    }): Promise<import("firebase-admin/lib/auth/user-record").UserRecord>;
    userAuthDetails(email: string): Promise<string | Record<string, string>>;
    resetPassword(email: string): Promise<import("firebase-admin/lib/auth/user-record").UserRecord>;
    removeUser(email: string): Promise<void>;
}
