import { Injectable } from "@nestjs/common";
import { ID } from "../../common/domain/value-objects/id";
import { UserOrmRepository } from "../infra/database/user.orm.repository";

@Injectable()
export class RemoveUserService {
  constructor(private readonly userReporsitory: UserOrmRepository) {}

  async remove(id: string): Promise<string> {
    const user = await this.userReporsitory.findOneByIdOrThrow(new ID(id));

    await this.userReporsitory.delete(user);
    return "Usuário deletado";
  }
}
