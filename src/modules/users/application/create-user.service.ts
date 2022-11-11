import { Injectable } from "@nestjs/common";
import { CreateFolderService } from "../../../modules/posts/application/folder/create-folder.service";
import { UserAuthService } from "../../auth/application/auth.service";
import { UserFactory } from "../domain/users.factory";
import { UserOrmRepository } from "../infra/database/user.orm.repository";
import { CreateUserInput } from "./dto/user.input";
import { UserDTO } from "./dto/user.output";

@Injectable()
export class CreateUserService {
  constructor(
    private readonly userRepository: UserOrmRepository,
    private readonly userAuthService: UserAuthService,
    private readonly createFolderService: CreateFolderService
  ) {}

  async create(input: CreateUserInput): Promise<UserDTO> {
    let authUser;
    try {
      authUser = await this.userAuthService.registerUser({
        name: input.name,
        nickname: input.nickname,
        email: input.email,
        password: input.password,
      });
    } catch (e) {
      throw new Error("Cannot create firebase user: " + e);
    }

    try {
      const userFactory = new UserFactory(this.userRepository);
      const user = await userFactory.create({
        ...input,
      });

      const userFolder = await this.createFolderService.create({
        userId: user.id.value,
        name: "Primeira pasta",
      });

      console.log("B", userFolder);

      return new UserDTO(user, userFolder);
    } catch (e) {
      throw new Error("Cannot create database user: " + e);
    }
  }
}
