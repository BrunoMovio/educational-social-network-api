import { UserRecord } from "firebase-admin/lib/auth/user-record";
export interface UserInfo {
    name: string;
    nickname: string;
    email: string;
}
interface UpdateNicknameInput {
    nickname: string;
    email: string;
}
export declare class UserAuthService {
    constructor();
    registerUser(userInfo: UserInfo): Promise<UserRecord>;
    resetPassword(email: string): Promise<UserRecord>;
    userMadeFirstLogin(email: string): Promise<void>;
    updateNickname(input: UpdateNicknameInput): Promise<Record<string, string>>;
    getUserAuthDetails(email: string): Promise<Record<string, string> | string>;
    removeUserAuth(email: string): Promise<void>;
    static validateApiKey(apiKey: string): boolean;
}
export {};
