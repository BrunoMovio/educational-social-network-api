import { Injectable } from "@nestjs/common";
import { DateVO } from "../../common/domain/value-objects/date.vo";
import { ID } from "../../common/domain/value-objects/id";
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
      name: input.name,
      description: input.description,
      birthday: new DateVO(input.birthday),
      avatar: input.avatar,
    });

    const savedPost = await this.userRepository.save(user);
    return new UserDTO(savedPost);
  }
}
