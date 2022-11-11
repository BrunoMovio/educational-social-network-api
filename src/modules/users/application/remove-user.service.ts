import { Injectable } from "@nestjs/common";
import { UserAuthService } from "../../auth/application/auth.service";
import { UserOrmRepository } from "../infra/database/user.orm.repository";

@Injectable()
export class RemoveUserService {
  constructor(
    private readonly userReporsitory: UserOrmRepository,
    private readonly userAuthService: UserAuthService
  ) {}

  async remove(email: string): Promise<string> {
    const user = await this.userReporsitory.findByEmail(email);

    if (!user)
      throw new Error("User not found to bem deleted by email: " + email);

    await this.userAuthService.removeUserAuth(email);
    await this.userReporsitory.delete(user);
    return "Usuário deletado";
  }
}
