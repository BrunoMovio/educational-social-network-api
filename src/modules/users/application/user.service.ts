import { Injectable, NotFoundException } from "@nestjs/common";
import { UserOrmRepository } from "../infra/database/user.orm.repository";
import { UserDTO } from "./dto/user.output";

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserOrmRepository) {}

  async findAll(): Promise<UserDTO[]> {
    const users = await this.userRepository.findMany();
    return users.map((user) => new UserDTO({ user }));
  }

  async findById(id: string): Promise<UserDTO> {
    try {
      const user = await this.userRepository.findOneByIdOrThrow(id);

      return new UserDTO({ user });
    } catch (e) {
      console.log(e);
      throw new NotFoundException("User not found with id: " + id);
    }
  }

  async findUsersByName(name: string): Promise<UserDTO[]> {
    try {
      const users = await this.userRepository.findByName(name);

      return users.map((user) => new UserDTO({ user }));
    } catch (e) {
      throw new NotFoundException("User not found with name: " + name);
    }
  }

  async findUsersByEmail(email: string): Promise<UserDTO> {
    try {
      const user = await this.userRepository.findByEmail(email);

      return new UserDTO({ user });
    } catch (e) {
      throw new NotFoundException("User not found with email: " + email);
    }
  }

  async findUsersByNickname(nickname: string): Promise<UserDTO> {
    try {
      const user = await this.userRepository.findByNickname(nickname);

      return new UserDTO({ user });
    } catch (e) {
      throw new NotFoundException("User not found with nickname: " + nickname);
    }
  }
}
