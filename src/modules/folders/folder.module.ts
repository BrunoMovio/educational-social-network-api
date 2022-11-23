import { forwardRef, Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { FolderOrm } from "./infra/folder.orm.entity";
import { FolderController } from "./presentation/folder.controler";
import { UserModule } from "../users/user.module";
import { FolderOrmRepository } from "./infra/folder.orm.repository";
import { CreateFolderService } from "./application/create-folder.service";
import { FolderService } from "./application/folder.service";
import { RemoveFolderService } from "./application/remove-folder.service";
import { UpdateFolderService } from "./application/update-folder.service";
import { FolderFactory } from "./domain/folder.factory";
import { FolderOrmMapper } from "./infra/folder.orm.mapper";
import { FolderFeedService } from "./application/folder-feed.service";

@Module({
  imports: [
    TypeOrmModule.forFeature([FolderOrm]),
    forwardRef(() => UserModule),
  ],
  providers: [
    FolderOrmRepository,
    FolderFactory,
    FolderService,
    FolderFeedService,
    CreateFolderService,
    UpdateFolderService,
    RemoveFolderService,
    FolderOrmMapper,
  ],
  controllers: [FolderController],
  exports: [FolderService, CreateFolderService],
})
export class FolderModule {}
