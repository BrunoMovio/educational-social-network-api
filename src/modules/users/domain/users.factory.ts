import { Injectable } from "@nestjs/common";
import { DateVO } from "../../common/domain/value-objects/date.vo";
import { UserOrmRepository } from "../infra/database/user.orm.repository";
import { User } from "./users.entity";

interface CreateUserInput {
  name: string;
  description: string;
  birthday: DateVO;
  avatar?: string;
}

@Injectable()
export class UserFactory {
  constructor(private userRepository: UserOrmRepository) {}

  async create(input: CreateUserInput) {
    const user = new User({
      ...input,
    });

    return this.userRepository.save(user);
  }
}
