import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import ormconfig from "./config/ormconfig";
import { AuthModule } from "./modules/auth/auth.module";
import { CommonModule } from "./modules/common/common.module";
import { PostModule } from "./modules/posts/post.module";
import { UserModule } from "./modules/users/user.module";

@Module({
  imports: [
    TypeOrmModule.forRoot(ormconfig),
    AuthModule,
    PostModule,
    UserModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
