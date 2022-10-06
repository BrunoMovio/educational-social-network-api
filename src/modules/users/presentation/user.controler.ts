import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Query,
  UseGuards,
} from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { UserService } from "../application/user.service";
import { CreateUserService } from "../application/create-user.service";
import {
  CreateUserInput,
  UpdateUserInput,
} from "../application/dto/user.input";
import { RemoveUserService } from "../application/remove-user.service";
import { UpdateUserService } from "../application/update-user.service";

@UseGuards(AuthGuard("api-key"))
@Controller("user")
export class UserController {
  constructor(
    private readonly userService: UserService,
    private readonly createUserService: CreateUserService,
    private readonly updateUserService: UpdateUserService,
    private readonly removeUserService: RemoveUserService
  ) {}

  @Post("create")
  async createUser(@Body("input") input: CreateUserInput) {
    return this.createUserService.create(input);
  }

  @Post("update")
  async updateUser(@Body("input") input: UpdateUserInput) {
    return this.updateUserService.update(input);
  }

  @Delete("remove")
  async removeUser(@Body("id") id: string) {
    return this.removeUserService.remove(id);
  }

  @Get("name/:name")
  async getUserByName(@Param("name") name: string) {
    return this.userService.findUsersByName(name);
  }

  @Get(":id")
  async getUser(@Param("id") id: string) {
    return this.userService.findById(id);
  }
}
