import { Injectable } from "@nestjs/common";
import { DateVO } from "../../common/domain/value-objects/date.vo";
import { UserAuthService } from "../../auth/application/auth.service";
import { UserFactory } from "../domain/users.factory";
import { UserOrmRepository } from "../infra/database/user.orm.repository";
import { CreateUserInput } from "./dto/user.input";
import { UserDTO } from "./dto/user.output";

@Injectable()
export class CreateUserService {
  constructor(
    private readonly userRepository: UserOrmRepository,
    private readonly userAuthService: UserAuthService
  ) {}

  async create(input: CreateUserInput): Promise<UserDTO> {
    const authUser = await this.userAuthService.registerUser({
      name: input.name,
      nickname: input.nickname,
      email: input.email,
    });

    if (!authUser) throw new Error("Cannot create firebase user");

    const userFactory = new UserFactory(this.userRepository);
    const user = await userFactory.create({
      ...input,
      birthday: new DateVO(input.birthday),
    });

    return new UserDTO(user);
  }
}
