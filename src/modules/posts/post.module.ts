import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { PostService } from "./application/post/post.service";
import { CreatePostService } from "./application/post/create-post.service";
import { RemovePostService } from "./application/post/remove-post.service";
import { UpdatePostService } from "./application/post/update-post.service";
import { PostFactory } from "./domain/post/posts.factory";
import { PostOrm } from "./infra/database/post/post.orm.entity";
import { PostOrmMapper } from "./infra/database/post/post.orm.mapper";
import { PostOrmRepository } from "./infra/database/post/post.orm.repository";
import { PostController } from "./presentation/post.controler";
import { FolderOrmRepository } from "./infra/database/folder/folder.orm.repository";
import { FolderFactory } from "./domain/folder/folder.factory";
import { FolderService } from "./application/folder/folder.service";
import { CreateFolderService } from "./application/folder/create-folder.service";
import { UpdateFolderService } from "./application/folder/update-folder.service";
import { RemoveFolderService } from "./application/folder/remove-folder.service";
import { FolderOrmMapper } from "./infra/database/folder/folder.orm.mapper";
import { FolderOrm } from "./infra/database/folder/folder.orm.entity";
import { FolderController } from "./presentation/folder.controler";

@Module({
  imports: [
    TypeOrmModule.forFeature([PostOrm]),
    TypeOrmModule.forFeature([FolderOrm]),
  ],
  providers: [
    PostOrmRepository,
    PostFactory,
    PostService,
    CreatePostService,
    UpdatePostService,
    RemovePostService,
    PostOrmMapper,

    FolderOrmRepository,
    FolderFactory,
    FolderService,
    CreateFolderService,
    UpdateFolderService,
    RemoveFolderService,
    FolderOrmMapper,
  ],
  controllers: [PostController, FolderController],
  exports: [PostService, FolderService, CreateFolderService],
})
export class PostModule {}
