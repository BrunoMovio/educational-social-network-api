import { Injectable } from "@nestjs/common";
import * as admin from "firebase-admin";
import { firebaseApp } from "../auth-firebase.config";
import { UserRecord } from "firebase-admin/lib/auth/user-record";

export interface UserInfo {
  name: string;
  nickname: string;
  email: string;
  password: string;
}

interface UpdateNicknameInput {
  nickname: string;
  email: string;
}

@Injectable()
export class UserAuthService {
  constructor() {}

  async registerUser(userInfo: UserInfo): Promise<UserRecord> {
    const auth = admin.auth(firebaseApp);

    let userRecord;

    try {
      userRecord = await auth.createUser({
        email: userInfo.email,
        password: userInfo.password,
        displayName: userInfo.name,
      });
    } catch (e) {
      throw new Error(e.errorInfo.message);
    }

    await auth.setCustomUserClaims(userRecord.uid, {
      nickname: userInfo.nickname,
      role: "ADMIN",
      isFirstLogin: true,
    });

    // send welcome email with name and password

    return userRecord;
  }

  async resetPassword(email: string): Promise<UserRecord> {
    const auth = admin.auth(firebaseApp);
    const firebaseUser = await auth.getUserByEmail(email);

    if (!firebaseUser) throw new Error("User not found");

    // add nanoid to generate password
    const randomPassword = "123456";

    await auth.updateUser(firebaseUser.uid, { password: randomPassword });

    await auth.setCustomUserClaims(firebaseUser.uid, {
      labenumero: firebaseUser.customClaims.nickname,
      isFirstLogin: true,
    });

    // send reset email with name and new password

    return firebaseUser;
  }

  async userMadeFirstLogin(email: string) {
    const auth = admin.auth(firebaseApp);

    const firebaseUser = await auth.getUserByEmail(email);

    await auth.setCustomUserClaims(firebaseUser.uid, {
      nickname: firebaseUser.customClaims.nickname,
      isFirstLogin: false,
    });
  }

  async updateNickname(
    input: UpdateNicknameInput
  ): Promise<Record<string, string>> {
    const auth = admin.auth(firebaseApp);

    const firebaseUser = await auth.getUserByEmail(input.email);

    await auth.setCustomUserClaims(firebaseUser.uid, {
      nickname: input.nickname,
      isFirstLogin: firebaseUser.customClaims.isFirstLogin,
    });

    return firebaseUser.customClaims;
  }

  async getUserAuthDetails(
    email: string
  ): Promise<Record<string, string> | string> {
    const auth = admin.auth(firebaseApp);

    const firebaseUser = await auth.getUserByEmail(email);

    return firebaseUser.customClaims || "Without custom claims";
  }

  async removeUserAuth(email: string): Promise<void> {
    const auth = admin.auth(firebaseApp);

    const firebaseUser = await auth.getUserByEmail(email);

    return auth.deleteUser(firebaseUser.uid);
  }

  static validateApiKey(apiKey: string): boolean {
    const key = process.env.API_KEY;
    return apiKey === key;
  }
}
