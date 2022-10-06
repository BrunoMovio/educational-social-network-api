import { Injectable, NotFoundException } from "@nestjs/common";
import { UserOrmRepository } from "../infra/database/user.orm.repository";
import { UserDTO } from "./dto/user.output";

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserOrmRepository) {}

  async findAll(): Promise<UserDTO[]> {
    const users = await this.userRepository.findMany();
    return users.map((content) => new UserDTO(content));
  }

  async findById(id: string): Promise<UserDTO> {
    try {
      const user = await this.userRepository.findOneByIdOrThrow(id);

      return new UserDTO(user);
    } catch (e) {
      console.log(e);
      throw new NotFoundException("User not found with id: " + id);
    }
  }

  async findUsersByName(name: string): Promise<UserDTO[]> {
    try {
      const user = await this.userRepository.findByName(name);

      return user.map((user) => new UserDTO(user));
    } catch (e) {
      throw new NotFoundException("User not found with name: " + name);
    }
  }
}
