import { Injectable } from "@nestjs/common";
import { CreateFolderService } from "../../../modules/folders/application/create-folder.service";
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
    let user;
    let userFolder;

    try {
      const userFactory = new UserFactory();
      user = await userFactory.create({
        ...input,
      });

      await this.userRepository.save(user);

      userFolder = await this.createFolderService.create({
        userId: user.id.value,
        title: "Primeiro projeto",
        description: "Primeiro projeto",
      });
    } catch (e) {
      throw new Error("Cannot create database user: " + e);
    }

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

    return new UserDTO({ user, firstFolderId: userFolder.id });
  }
}
