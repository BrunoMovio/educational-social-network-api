import { Injectable } from "@nestjs/common";
import { CreateUserInput } from "../application/dto/user.input";
import { UserOrmRepository } from "../infra/database/user.orm.repository";
import { User, UserRoles } from "./users.entity";

@Injectable()
export class UserFactory {
  constructor() {}

  async create(input: CreateUserInput) {
    const user = new User({
      ...input,
      description: input.description || "",
      role: UserRoles[input.role] || UserRoles.NORMAL,
      city: input.city || "",
      state: input.state || "",
      country: input.country || "",
      career: input.career || "",
    });

    return user;
  }
}
