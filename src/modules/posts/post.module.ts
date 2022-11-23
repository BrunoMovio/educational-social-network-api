import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { PostOrm } from "./infra/post/post.orm.entity";
import { UserModule } from "../users/user.module";
import { CreatePostService } from "./application/create-post.service";
import { PostService } from "./application/post.service";
import { RemovePostService } from "./application/remove-post.service";
import { UpdatePostService } from "./application/update-post.service";
import { PostFactory } from "./domain/posts.factory";
import { PostOrmMapper } from "./infra/post/post.orm.mapper";
import { PostOrmRepository } from "./infra/post/post.orm.repository";
import { PostController } from "./presentation/post.controler";
import { PostFeedService } from "./application/post-feed.service";
import { FolderModule } from "../folders/folder.module";

@Module({
  imports: [TypeOrmModule.forFeature([PostOrm]), UserModule, FolderModule],
  providers: [
    PostOrmRepository,
    PostFactory,
    PostService,
    CreatePostService,
    UpdatePostService,
    RemovePostService,
    PostFeedService,
    PostOrmMapper,
  ],
  controllers: [PostController],
  exports: [PostService],
})
export class PostModule {}
