import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserService } from "./application/user.service";
import { CreateUserService } from "./application/create-user.service";
import { RemoveUserService } from "./application/remove-user.service";
import { UpdateUserService } from "./application/update-user.service";
import { UserFactory } from "./domain/users.factory";
import { UserOrm } from "./infra/database/user.orm.entity";
import { UserOrmMapper } from "./infra/database/user.orm.mapper";
import { UserOrmRepository } from "./infra/database/user.orm.repository";
import { UserController } from "./presentation/user.controler";
import { AuthModule } from "../auth/auth.module";
import { PostModule } from "../posts/post.module";

@Module({
  imports: [TypeOrmModule.forFeature([UserOrm]), AuthModule, PostModule],
  providers: [
    UserOrmRepository,
    UserFactory,
    UserService,
    CreateUserService,
    UpdateUserService,
    RemoveUserService,
    UserOrmMapper,
  ],
  controllers: [UserController],
  exports: [UserService],
})
export class UserModule {}
