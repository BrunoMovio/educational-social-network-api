import { Injectable } from "@nestjs/common";
import { ID } from "../../common/domain/value-objects/id";
import { UserRoles } from "../domain/users.entity";
import { UserOrmRepository } from "../infra/database/user.orm.repository";
import { UpdateUserInput } from "./dto/user.input";
import { UserDTO } from "./dto/user.output";

@Injectable()
export class UpdateUserService {
  constructor(private readonly userRepository: UserOrmRepository) {}

  async update(input: UpdateUserInput): Promise<UserDTO> {
    const user = await this.userRepository.findOne({
      id: new ID(input.id),
    });

    user.updateUser({
      email: input.email || user.email,
      nickname: input.nickname || user.nickname,
      name: input.name || user.name,
      role: UserRoles[input.role] || user.role,
      description: input.description,
      city: input.city,
      state: input.state,
      country: input.country,
      career: input.career,
    });

    const savedPost = await this.userRepository.save(user);
    return new UserDTO(savedPost);
  }
}
