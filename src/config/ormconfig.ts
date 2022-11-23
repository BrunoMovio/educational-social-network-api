import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { join } from "path";
import { SnakeNamingStrategy } from "typeorm-naming-strategies";
import { PostOrm } from "../modules/posts/infra/post/post.orm.entity";
import { FolderOrm } from "../modules/folders/infra/folder.orm.entity";
import { UserOrm } from "../modules/users/infra/database/user.orm.entity";

export default {
  type: "postgres",
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: Number(process.env.DB_PORT) || 5432,
  entities: [PostOrm, FolderOrm, UserOrm],
  logging: false,
  migrations: [join(__dirname, "..", "migration", "*.{ts,js}")],
  cli: {
    migrationsDir: "src/migration",
  },
  namingStrategy: new SnakeNamingStrategy(),
} as TypeOrmModuleOptions;
