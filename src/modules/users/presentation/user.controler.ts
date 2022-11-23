import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Post,
  Res,
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
import { Response } from "express";
import { UserFeedService } from "../application/user-feed.service";

@UseGuards(AuthGuard("api-key"))
@Controller("user")
export class UserController {
  constructor(
    private readonly userService: UserService,
    private readonly userFeedService: UserFeedService,
    private readonly createUserService: CreateUserService,
    private readonly updateUserService: UpdateUserService,
    private readonly removeUserService: RemoveUserService
  ) {}

  @Post("create")
  async createUser(
    @Body("input") input: CreateUserInput,
    @Res({ passthrough: true }) res: Response
  ) {
    try {
      const user = await this.createUserService.create(input);

      res.status(200).send(user);
    } catch (e: any) {
      console.log(e);

      throw new HttpException(
        {
          status: HttpStatus.UNPROCESSABLE_ENTITY,
          error: `${e}`,
        },
        HttpStatus.UNPROCESSABLE_ENTITY
      );
    }
  }

  @Post("update")
  async updateUser(@Body("input") input: UpdateUserInput) {
    try {
      const user = await this.updateUserService.update(input);
      return user;
    } catch (e: any) {
      throw new HttpException(
        {
          status: HttpStatus.NOT_MODIFIED,
          error: `${e}`,
        },
        HttpStatus.NOT_MODIFIED
      );
    }
  }

  @Delete("remove")
  async removeUser(@Body("email") email: string) {
    try {
      const user = await this.removeUserService.remove(email);
      return user;
    } catch (e: any) {
      throw new HttpException(
        {
          status: HttpStatus.NOT_FOUND,
          error: `${e}`,
        },
        HttpStatus.NOT_FOUND
      );
    }
  }

  @Get("name/:name")
  async getUsersDByName(@Param("name") name: string) {
    try {
      const user = await this.userService.findUsersByName(name);
      return user;
    } catch (e: any) {
      throw new HttpException(
        {
          status: HttpStatus.NOT_FOUND,
          error: `${e}`,
        },
        HttpStatus.NOT_FOUND
      );
    }
  }

  @Get("email/:email")
  async getUserByEmail(@Param("email") email: string) {
    try {
      const user = await this.userService.findUsersByEmail(email);
      return user;
    } catch (e: any) {
      throw new HttpException(
        {
          status: HttpStatus.NOT_FOUND,
          error: `${e}`,
        },
        HttpStatus.NOT_FOUND
      );
    }
  }

  @Get("nickname/:nickname")
  async getUserByNickname(@Param("nickname") nickname: string) {
    try {
      const user = await this.userService.findUsersByNickname(nickname);
      return user;
    } catch (e: any) {
      throw new HttpException(
        {
          status: HttpStatus.NOT_FOUND,
          error: `${e}`,
        },
        HttpStatus.NOT_FOUND
      );
    }
  }

  @Get(":id")
  async getUser(@Param("id") id: string) {
    try {
      const user = await this.userService.findById(id);
      return user;
    } catch (e: any) {
      throw new HttpException(
        {
          status: HttpStatus.NOT_FOUND,
          error: `${e}`,
        },
        HttpStatus.NOT_FOUND
      );
    }
  }

  @Get("feed/:userId/:page")
  async getFeed(@Param("userId") userId: string, @Param("page") page: number) {
    try {
      const feed = await this.userFeedService.findByUser({ userId, page });
      return feed;
    } catch (e: any) {
      console.log(e);
      throw new HttpException(
        {
          status: HttpStatus.NOT_FOUND,
          error: `${e}`,
        },
        HttpStatus.NOT_FOUND
      );
    }
  }
}
