import {
  BadRequestException,
  Body,
  Controller,
  Get,
  Post,
} from "@nestjs/common";
import { UserAuthService } from "../application/auth.service";

@Controller("user-auth")
export class UserAuthController {
  constructor(private readonly firebaseAuthService: UserAuthService) {}

  @Post("register")
  async register(
    @Body("userInfo")
    userInfo: {
      name: string;
      email: string;
      nickname: string;
      password: string;
    }
  ) {
    try {
      return this.firebaseAuthService.registerUser(userInfo);
    } catch (e) {
      console.log(e);
      throw new BadRequestException(e.message);
    }
  }

  @Get("details")
  async userAuthDetails(@Body("email") email: string) {
    try {
      return this.firebaseAuthService.getUserAuthDetails(email);
    } catch (e) {
      console.log(e);
      throw new BadRequestException(e.message);
    }
  }

  @Post("reset-password")
  async resetPassword(@Body("email") email: string) {
    try {
      return this.firebaseAuthService.resetPassword(email);
    } catch (e) {
      console.log(e);
      throw new BadRequestException(e.message);
    }
  }

  @Post("remove")
  async removeUser(@Body("email") email: string) {
    try {
      return this.firebaseAuthService.removeUserAuth(email);
    } catch (e) {
      console.log(e);
      throw new BadRequestException(e.message);
    }
  }
}
